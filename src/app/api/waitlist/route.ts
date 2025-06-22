import React from 'react';
import { render } from '@react-email/components';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { EmailTemp } from '@/lib/waitlist';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    console.log("Received email:", email);

    if (!email) {
      return NextResponse.json({ message: 'Email is required' }, { status: 400 });
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'narendranishad59@gmail.com',
        pass: process.env.NEXT_PUBLIC_APP_PASSWORD,
      },
    });

    // Render the updated email template
    const emailHtml = await render(
      React.createElement(EmailTemp, { email })
    );

    // Set up mail options
    const mailOptions: nodemailer.SendMailOptions = {
      from: 'narendranishad59@gmail.com',
      to: email,
      subject: `⚔️ Welcome to Soul Arise, ${email.split('@')[0]}!`,
      html: emailHtml,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
