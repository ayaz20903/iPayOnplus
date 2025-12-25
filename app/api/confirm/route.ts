import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  if (!token) {
    return NextResponse.json(
      { error: "Invalid or missing token" },
      { status: 400 }
    );
  }

  try {
    // Decode and verify JWT
    const lead = jwt.verify(token, process.env.JWT_SECRET!) as any;

    // Email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const APP_URL = process.env.NEXT_PUBLIC_APP_URL!;
    const logoUrl = `${APP_URL}/logo.png`;

    await transporter.sendMail({
      from: `"iPayOn+" <${process.env.SMTP_USER}>`,
      to: lead.email,
      subject: "Thank you for confirming!",
      html: `
        <div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#ffffff;padding:32px 16px;">
          <div style="max-width:520px;margin:0 auto;background:#071613;border-radius:16px;padding:32px 28px;border:1px solid rgba(148,163,184,0.3);">
            
            <div style="text-align:center;margin-bottom:10px;">
              <!-- Logo -->
              <div style="margin-bottom:18px;">
                <img
                  src="${logoUrl}"
                  alt="logo"
                  style="height:auto;max-width:160px;display:inline-block;"
                />
              </div>

              <h1 style="margin:18px 0 8px;font-size:24px;line-height:1.3;">
                <span
                  style="
                    background: linear-gradient(to right, #ffffff, #14B8A6);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    -webkit-text-fill-color: transparent;
                    display: inline-block;
                  "
                >
                  Hi ${lead.name},
                </span>
              </h1>

              <p style="margin:6px 0 0;font-size:14px;line-height:1.7;color:#9ca3af;">
                Thank you for confirming your email address.
              </p>
              <p style="margin:6px 0 0;font-size:14px;line-height:1.7;color:#9ca3af;">
                ✅ Your details are verified successfully.
              </p>
            </div>

            <div style="text-align:center;margin: 24px 0;">
              <p style="margin:0 0;font-size:24px;line-height:1.7;color:#9ca3af;">
                What happens next?
              </p>
              <p style="margin:0 0 16px;font-size:13px;line-height:1.7;color:#9ca3af;">
                Our team will connect with you soon to learn more about your business and guide you through setting up your iPayon+ digital system.
              </p>
            </div>
          </div>

          <p style="max-width:520px;margin:12px auto 0;text-align:center;font-size:11px;color:#6b7280;">
            © ${new Date().getFullYear()} iPayOn+. All rights reserved.
          </p>
        </div>
      `,
    });

    // 2️⃣ Send lead details to your email
    await transporter.sendMail({
      from: `"iPayon+ Lead" <${process.env.SMTP_USER}>`,
      to: process.env.MY_EMAIL,
      subject: "New Lead Confirmed",
      html: `
            <h3>New Lead Details:</h3>
            <p><strong>Name:</strong> ${lead.name}</p>
            <p><strong>Email:</strong> ${lead.email}</p>
            <p><strong>Phone:</strong> ${lead.phone || "-"}</p>
            <p><strong>Shop:</strong> ${lead.shop || "-"}</p>
            <p><strong>Address:</strong> ${lead.address || "-"}</p>
            <p><strong>Message:</strong> ${lead.message || "-"}</p>
          `,
    });

    // Redirect user to a thank-you page
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_SITE_URL}`);
  } catch (error) {
    console.error("Confirm Error:", error);
    return NextResponse.json(
      { error: "Invalid or expired token" },
      { status: 400 }
    );
  }
}
