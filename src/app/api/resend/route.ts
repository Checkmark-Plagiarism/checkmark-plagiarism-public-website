import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY ?? "");

const ContactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(200),
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

    const { name, email, message, token } = parsed.data;

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
      replyTo: email, // <-- correct casing
    });

    if (error) {
      return NextResponse.json({ ok: false, error: "Email failed." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Server error." }, { status: 500 });
  }
}
