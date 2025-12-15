import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, message, turnstileToken } =
      await req.json();

    // Verify Cloudflare Turnstile token server-side
    const secret =
      process.env.TURNSTILE_SECRET_KEY || process.env.NEXT_TURNSTILE_SECRET_KEY;
    if (!secret) {
      return NextResponse.json(
        { success: false, error: "Turnstile secret is not configured" },
        { status: 500 }
      );
    }

    if (!turnstileToken) {
      return NextResponse.json(
        { success: false, error: "Missing Turnstile token" },
        { status: 400 }
      );
    }

    const ip = (req as any).headers?.get("x-forwarded-for") || undefined;
    const verifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret,
          response: turnstileToken,
          remoteip: Array.isArray(ip) ? ip[0] : ip,
        }),
      }
    );

    const verification = await verifyRes.json();
    if (!verification?.success) {
      console.log("Turnstile verification failed", verification);
      return NextResponse.json(
        { success: false, error: "Failed Turnstile verification" },
        { status: 403 }
      );
    }

    await resend.emails.send({
      from: process.env.MAIL_FROM!,
      to: process.env.MAIL_TO!,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Message</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
         <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
