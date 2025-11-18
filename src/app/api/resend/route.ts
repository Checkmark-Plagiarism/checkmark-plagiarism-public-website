import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { google } from "googleapis";

// Google sheets function
async function writeToGoogleSheets(formData: { name: string; email: string; school?: string; role: string; inquiryType: string; message: string }, timestamp: string) {
  if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SHEET_ID) {
    console.log('Google Sheets not configured, skipping...');
    return;
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL, private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),},
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:G', // 7 columns: Timestamp, Name, Email, School, Role, Inquiry Type, Message
      valueInputOption: 'RAW',
      requestBody: {
        values: [[
          timestamp,
          formData.name,
          formData.email,
          formData.school || '',
          formData.role,
          formData.inquiryType,
          formData.message
        ]],
      },
    });

    console.log('Successfully wrote to Google Sheets');
  } catch (error) {
    console.error('Google Sheets error:', error);
    // Don't throw, we don't want to break email sending if Sheets fails
  }
}

const resend = new Resend(process.env.RESEND_API_KEY ?? "");

const ContactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(200),
  school: z.string().max(200).optional(),
  role: z.string().min(1).max(100),
  inquiryType: z.string().min(1).max(100),
  message: z.string().min(10).max(5000),
  token: z.string().min(1),
});

type TurnstileVerifyResponse = {
  success: boolean;
  // optional fields Cloudflare may return:
  // "error-codes"?: string[];
  // "challenge_ts"?: string;
  // "hostname"?: string;
  // "action"?: string;
  // "cdata"?: string;
};

async function verifyTurnstile(token: string, ip?: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    return { ok: false as const, data: { "error-codes": ["missing-secret"] } };
  }

  const body = new URLSearchParams();
  body.append("secret", secret);
  body.append("response", token);
  if (ip) body.append("remoteip", ip);

  const r = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body,
  });

  const data = (await r.json()) as TurnstileVerifyResponse;

  return { ok: data.success === true, data };
}

export async function POST(req: Request) {
  try {
    // Derive IP from common proxy headers
    const fwd = req.headers.get("x-forwarded-for") ?? "";
    const ip = fwd.split(",")[0]?.trim() || req.headers.get("x-real-ip") || undefined;

    const json = await req.json();
    const parsed = ContactSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json({ ok: false, error: "Invalid input." }, { status: 400 });
    }

    const { name, email, school, role, inquiryType, message, token } = parsed.data;

    // Verify CAPTCHA (and pass raw verify payload back if it fails)
    const verify = await verifyTurnstile(token, ip);
    if (!verify.ok) {
      return NextResponse.json(
        { ok: false, error: "Captcha failed.", verify: verify.data },
        { status: 400 }
      );
    }

    // Send team notification email
    const to = process.env.EMAIL_TO!;
    const from = process.env.EMAIL_FROM!;
    const subject = `New Contact: ${inquiryType} - ${name}`;
    const text = `New contact form submission:

From: ${name} <${email}>
School: ${school || 'Not provided'}
Role: ${role}
Inquiry Type: ${inquiryType}

Message:
${message}`;

    const { error: teamError } = await resend.emails.send({
      from,
      to,
      subject,
      text,
      replyTo: email,
    });

    if (teamError) {
      console.error('Team email error:', teamError);
      return NextResponse.json({ ok: false, error: "Email failed." }, { status: 500 });
    }

    // Send user confirmation email
    const userSubject = "We received your message - Checkmark";
    const userText = `Hi ${name},

Thank you for contacting Checkmark! We've received your message and will get back to you soon.

Here's a copy of what you submitted:

Name: ${name}
Email: ${email}
School: ${school || 'Not provided'}
Role: ${role}
Inquiry Type: ${inquiryType}

Message:
${message}

We typically respond within 1-2 business days. If you have any urgent questions, feel free to reply to this email.

Best regards,
The Checkmark Team`;

    const { error: userError } = await resend.emails.send({
      from,
      to: email,
      subject: userSubject,
      text: userText,
    });

    if (userError) {
      console.error('User confirmation email error:', userError);
      // Don't fail the request if user email fails, team was notified
    }

    // Write to Google Sheets
    const timestamp = new Date().toISOString();
    await writeToGoogleSheets(
      { name, email, school, role, inquiryType, message },
      timestamp
    );

    // Extract email address from "Name <email>" format if present
    const emailMatch = from.match(/<(.+)>/) || [null, from];
    const emailAddress = emailMatch[1] || from;

    return NextResponse.json({ ok: true, emailFrom: emailAddress });
  } catch {
    return NextResponse.json({ ok: false, error: "Server error." }, { status: 500 });
  }
}
