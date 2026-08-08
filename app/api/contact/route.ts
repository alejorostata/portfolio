import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'Email service configuration pending (RESEND_API_KEY missing)' },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);

    const formattedSubject = `📬 [PORTFOLIO INQUIRY] ${name} — ${subject || 'Direct Message'}`;

    const data = await resend.emails.send({
      from: 'Alejo Portfolio Direct <portfolio@stelifo.com>',
      to: ['alejorostata@gmail.com'],
      replyTo: email,
      subject: formattedSubject,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || 'N/A'}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 28px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
          
          <!-- Top Badge Header -->
          <div style="display: inline-block; padding: 6px 12px; border-radius: 9999px; background-color: #eff6ff; border: 1px solid #bfdbfe; color: #1d4ed8; font-size: 11px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 16px;">
            📬 Portfolio Direct Message
          </div>

          <h2 style="color: #0f172a; margin-top: 0; margin-bottom: 8px; font-size: 22px; font-weight: 800; tracking: -0.02em;">
            New Inquiry from ${name}
          </h2>
          <p style="color: #64748b; font-size: 13px; margin: 0 0 20px 0;">
            A potential client or recruiter submitted a direct message via your portfolio website.
          </p>

          <hr style="border: 0; border-top: 1px solid #f1f5f9; margin: 0 0 20px 0;" />

          <!-- Details Card -->
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
            <tr>
              <td style="padding: 6px 0; color: #64748b; font-weight: 600; width: 110px;">Sender Name:</td>
              <td style="padding: 6px 0; color: #0f172a; font-weight: 700;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Email Address:</td>
              <td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #2563eb; font-weight: 600; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Subject:</td>
              <td style="padding: 6px 0; color: #0f172a;">${subject || 'N/A'}</td>
            </tr>
          </table>

          <!-- Message Box -->
          <div style="margin-bottom: 24px;">
            <p style="color: #475569; font-size: 12px; font-weight: 700; uppercase; tracking: 0.05em; margin: 0 0 8px 0;">Message Content:</p>
            <div style="background-color: #f8fafc; padding: 18px; border-radius: 12px; font-size: 14px; line-height: 1.6; white-space: pre-wrap; color: #1e293b; border: 1px solid #e2e8f0;">
              ${message}
            </div>
          </div>

          <!-- Quick Action Button -->
          <div style="text-align: center; margin-bottom: 24px;">
            <a href="mailto:${email}" style="display: inline-block; padding: 12px 24px; border-radius: 10px; background-color: #2563eb; color: #ffffff; font-weight: 700; font-size: 13px; text-decoration: none; box-shadow: 0 2px 4px rgba(37, 99, 235, 0.2);">
              Reply directly to ${name} (${email})
            </a>
          </div>

          <hr style="border: 0; border-top: 1px solid #f1f5f9; margin: 0 0 16px 0;" />
          <p style="font-size: 11px; color: #94a3b8; text-align: center; margin: 0;">
            Sent automatically via alejorostata portfolio contact form • ${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      `,
    });

    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data.data?.id });
  } catch {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
