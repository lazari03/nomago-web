import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // Configure Brevo SMTP transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp-relay.brevo.com',
      port: 587,
      secure: false,
      auth: {
        user: '94cd4c001@smtp-brevo.com',
        pass: 'dxUtzphADHKZSkGc',
      },
    });

    // Email options
    const mailOptions = {
      from: '94cd4c001@smtp-brevo.com', // Your Brevo sender
      to: 'administation@nomago.al', // Change to your destination email
      subject: `Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    let errorMessage = 'Unknown error';
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'string') {
      errorMessage = error;
    }
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
