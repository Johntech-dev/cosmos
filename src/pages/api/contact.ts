import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

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
    } = req.body;

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_SERVER || 'mail.cosmolab.cc', // Your domain's mail server
      port: Number(process.env.SMTP_PORT) || 465, // Usually 465 for SSL or 587 for TLS
      secure: true,
      auth: {
        user: 'connect@cosmolab.cc',
        pass: process.env.EMAIL_PASSWORD, // The password you set for connect@cosmolab.cc
      },
    });

    // Email content
    const mailOptions = {
      from: 'connect@cosmolab.cc',
      to: 'connect@cosmolab.cc',
      replyTo: email, // This allows you to reply directly to the person who filled the form
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
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
} 