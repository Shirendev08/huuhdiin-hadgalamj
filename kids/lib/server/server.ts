'use server'
import nodemailer from 'nodemailer';

interface FormData {
  register: string;
  childRegister: string;
  email: string;
  phone: string;
  gift: string;
  signature: string;
  birthCertificate: string; // Change this to string to accept base64
}

const sendEmail = async (formData: FormData) => {
  const { email, phone, register, childRegister, gift, signature, birthCertificate } = formData;

  // Set up the transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Email content
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: 'kalistagms@gmail.com',
    subject: 'Huuhdiin hadgalamj huselt irlee.',
    html: `
      <h1>Form Data</h1>
      <p><strong>Эцэг эхийн регистер :</strong> ${register}</p>
      <p><strong>Хүүхдийн регистер:</strong> ${childRegister}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Утасны дугаар:</strong> ${phone}</p>
      <p><strong>Бэлэгний дугаар:</strong> ${gift}</p>
      <p><strong>Гарын үсэг:</strong> <img src="${signature}" alt="signature" /></p>
      <p><strong>Төрсний гэрчилгээ:</strong> ${birthCertificate ? `<img src="${birthCertificate}" alt="birth certificate" />` : 'No birth certificate provided.'}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};

export default sendEmail;
