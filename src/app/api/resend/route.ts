import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { google } from "googleapis";

// Google sheets function
async function writeToGoogleSheets(formData: { name: string; email: string; phone?: string; message: string }, timestamp: string,  ip?: string, userAgent?: string) {
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
      range: 'Sheet1!A:H', // Adjust as needed
      valueInputOption: 'RAW',
      requestBody: {
        values: [[
          timestamp,
          formData.name,
          formData.email,
          formData.phone || '',
          formData.message,
          ip || '',
          userAgent || '',
          'Contact Form'
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
  phone: z.string().max(20).optional(),
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

    const { name, email, phone, message, token } = parsed.data;

    // Verify CAPTCHA (and pass raw verify payload back if it fails)
    const verify = await verifyTurnstile(token, ip);
    if (!verify.ok) {
      return NextResponse.json(
        { ok: false, error: "Captcha failed.", verify: verify.data },
        { status: 400 }
      );
    }

    // Send email
    const to = process.env.EMAIL_TO!;
    const from = process.env.EMAIL_FROM!;
    const subject = `New contact form message from ${name}`;
    const text = `From: ${name} <${email}>\n\n${message}`;

    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      text,
      replyTo: email,
    });

    if (error) {
      return NextResponse.json({ ok: false, error: "Email failed." }, { status: 500 });
    }

    // Email sent successfully, now write to Google Sheets
    const timestamp = new Date().toISOString();
    const userAgent = req.headers.get("user-agent") ?? undefined;

    // Write to google sheets (non-blocking, don't fail if sheets fail)
    await writeToGoogleSheets(
      { name, email, phone: phone || '', message },
      timestamp, 
      ip, 
      userAgent
    );

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Server error." }, { status: 500 });
  }
}
