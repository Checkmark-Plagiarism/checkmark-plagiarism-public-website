import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { google } from "googleapis";
import { getAvailableSlots, createDemoEvent, isSlotAvailable } from "@/lib/google-calendar";
import { format, parse } from "date-fns";

const resend = new Resend(process.env.RESEND_API_KEY ?? "");

const ScheduleDemoSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(200),
  school: z.string().min(1).max(200), // Required for demos
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), // YYYY-MM-DD
  time: z.string().regex(/^\d{2}:\d{2}$/), // HH:mm
  token: z.string().min(1),
});

type TurnstileVerifyResponse = {
  success: boolean;
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

async function writeToGoogleSheets(
  formData: { name: string; email: string; school: string; demoDate: string; demoTime: string },
  timestamp: string
) {
  if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SHEET_ID) {
    console.log("Google Sheets not configured, skipping...");
    return;
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Match contact form columns: Timestamp, Name, Email, School, Role, Inquiry Type, Message
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:G", // 7 columns to match contact form
      valueInputOption: "RAW",
      requestBody: {
        values: [[
          timestamp,
          formData.name,
          formData.email,
          formData.school,
          '', // Role - leave empty for demo requests
          'Demo', // Inquiry Type - always "Demo"
          `Scheduled demo for ${formData.demoDate} at ${formData.demoTime}`, // Message with date/time
        ]],
      },
    });

    console.log("Successfully wrote to Google Sheets");
  } catch (error) {
    console.error("Google Sheets error:", error);
    // Don't throw, we don't want to break the flow if Sheets fails
  }
}

/**
 * GET /api/schedule-demo?date=YYYY-MM-DD
 * Returns available time slots for the given date
 */
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const date = searchParams.get("date");

    if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return NextResponse.json(
        { ok: false, error: "Invalid date format. Use YYYY-MM-DD." },
        { status: 400 }
      );
    }

    // Check if date is in the past
    const selectedDate = parse(date, "yyyy-MM-dd", new Date());
    const now = new Date();
    if (selectedDate < now) {
      return NextResponse.json(
        { ok: false, error: "Cannot schedule demos in the past." },
        { status: 400 }
      );
    }

    const slots = await getAvailableSlots(date);

    return NextResponse.json({ ok: true, slots });
  } catch (error) {
    console.error("Error fetching available slots:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to fetch available slots." },
      { status: 500 }
    );
  }
}

/**
 * POST /api/schedule-demo
 * Creates a demo booking
 */
export async function POST(req: Request) {
  try {
    // Get IP for Turnstile verification
    const fwd = req.headers.get("x-forwarded-for") ?? "";
    const ip = fwd.split(",")[0]?.trim() || req.headers.get("x-real-ip") || undefined;

    const json = await req.json();
    const parsed = ScheduleDemoSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json({ ok: false, error: "Invalid input." }, { status: 400 });
    }

    const { name, email, school, date, time, token } = parsed.data;

    // Verify CAPTCHA
    const verify = await verifyTurnstile(token, ip);
    if (!verify.ok) {
      return NextResponse.json(
        { ok: false, error: "Captcha failed.", verify: verify.data },
        { status: 400 }
      );
    }

    // Double-check the slot is still available (prevent race conditions)
    const available = await isSlotAvailable(date, time);
    if (!available) {
      return NextResponse.json(
        { ok: false, error: "This time slot is no longer available. Please select another." },
        { status: 409 }
      );
    }

    // Create the calendar event
    const { eventId, meetLink, eventLink } = await createDemoEvent(name, email, school, date, time);

    // Format date and time for emails (human-readable)
    const selectedDate = parse(date, "yyyy-MM-dd", new Date());
    const formattedDate = format(selectedDate, "EEEE, MMMM d, yyyy");
    const [hours, minutes] = time.split(":").map(Number);
    const isPM = hours >= 12;
    const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
    const formattedTime = `${displayHours}:${minutes.toString().padStart(2, "0")} ${isPM ? "PM" : "AM"} PST`;

    const from = process.env.EMAIL_FROM!;
    const teamEmail = process.env.EMAIL_TO!;

    // Send team notification email
    const teamSubject = `New Demo Scheduled - ${school}`;
    const teamText = `A new demo has been scheduled!

📅 Date & Time: ${formattedDate} at ${formattedTime}
👤 Name: ${name}
📧 Email: ${email}
🏫 School: ${school}

🔗 Google Meet Link: ${meetLink}
📆 View in Calendar: ${eventLink}

This appointment has been added to the Demo Bookings calendar.`;

    const { error: teamError } = await resend.emails.send({
      from,
      to: teamEmail,
      subject: teamSubject,
      text: teamText,
    });

    if (teamError) {
      console.error("Team email error:", teamError);
      // Continue even if team email fails
    }

    // Send user confirmation email
    const userSubject = "Demo Confirmed - Checkmark";
    const userText = `Hi ${name},

Your demo is confirmed! We're excited to show you how Checkmark can help ${school}.

📅 Date & Time: ${formattedDate} at ${formattedTime}
🔗 Join via Google Meet: ${meetLink}

Please add this event to your calendar so you don't miss the demo!

What to expect:
• 30-minute personalized demo
• See how Checkmark detects plagiarism
• Discuss ${school}'s specific needs
• Q&A session

Questions before the demo? Simply reply to this email.

Looking forward to meeting you!

Best regards,
The Checkmark Team`;

    const { error: userError } = await resend.emails.send({
      from,
      to: email,
      subject: userSubject,
      text: userText,
    });

    if (userError) {
      console.error("User confirmation email error:", userError);
      // Don't fail the request if user email fails
    }

    // Write to Google Sheets
    const timestamp = new Date().toISOString();
    await writeToGoogleSheets(
      { name, email, school, demoDate: formattedDate, demoTime: formattedTime },
      timestamp
    );

    // Extract email address from "Name <email>" format if present
    const emailMatch = from.match(/<(.+)>/) || [null, from];
    const emailAddress = emailMatch[1] || from;

    return NextResponse.json({
      ok: true,
      emailFrom: emailAddress,
      eventId,
      meetLink,
      date: formattedDate,
      time: formattedTime,
    });
  } catch (error) {
    console.error("Error scheduling demo:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to schedule demo. Please try again." },
      { status: 500 }
    );
  }
}
