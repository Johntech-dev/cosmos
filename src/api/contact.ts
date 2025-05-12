
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export async function sendContactEmail(formData: any) {
  try {
    const {
      firstName,
      lastName,
      email,
      organization,
      projectScope,
      securityRequirements,
      message,
      contactMethod,
    } = formData;

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_SERVER || 'mail.cosmolab.cc',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: 'connect@cosmolab.cc',
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: 'connect@cosmolab.cc',
      to: 'connect@cosmolab.cc',
      replyTo: email,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organization:</strong> ${organization || 'Not provided'}</p>
        <p><strong>Project Scope:</strong> ${projectScope}</p>
        <p><strong>Security Requirements:</strong> ${securityRequirements || 'Not provided'}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Preferred Contact Method:</strong> ${contactMethod}</p>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}
