import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, intent, sampleTitle, timestamp } = body;

    // Validate required fields
    if (!name || !phone || !email || !intent) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
New Portfolio Access Request

Name: ${name}
Phone: ${phone}
Email: ${email}
Intent: ${intent}
Sample Requested: ${sampleTitle}
Timestamp: ${timestamp}

---
This is an automated message from the portfolio access form.
    `;

    // Here you would integrate with your email service
    // Options: Resend, SendGrid, Nodemailer, etc.
    
    // For now, we'll log the data (you should replace this with actual email sending)
    console.log('Email content:', emailContent);
    
    // Example with Resend (you'd need to install @resend/node and configure API keys):
    /*
    import { Resend } from 'resend';
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'portfolio@yourdomain.com',
      to: 'your-email@yourdomain.com',
      subject: 'New Portfolio Access Request',
      text: emailContent,
    });
    */

    // Example with SendGrid (you'd need to install @sendgrid/mail and configure API keys):
    /*
    import sgMail from '@sendgrid/mail';
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    await sgMail.send({
      to: 'your-email@yourdomain.com',
      from: 'portfolio@yourdomain.com',
      subject: 'New Portfolio Access Request',
      text: emailContent,
    });
    */

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
