"use server"
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { register, childRegister, email, phone, birthCertificate, gift, signature } = req.body;

    // Configure the SMTP transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.example.com', // Replace with your SMTP server
      port: 587, // Replace with your SMTP port
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'your-email@example.com', // Replace with your email
        pass: 'your-email-password', // Replace with your email password
      },
    });

    // Email options
    const mailOptions = {
      from: 'your-email@example.com', // Sender address
      to: email, // Receiver email
      subject: 'Form Submission', // Subject line
      text: `
        Register: ${register}
        Child's Register: ${childRegister}
        Email: ${email}
        Phone: ${phone}
        Birth Certificate: ${birthCertificate}
        Gift: ${gift}
        Signature: ${signature}
      `, // Plain text body
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
