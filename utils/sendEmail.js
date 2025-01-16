const nodeMailer = require("nodemailer");

const createTransport = nodeMailer.createTransport;

const sendEmail = async (to, subject, htmlContent) => {
  const transporter = createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    to,
    subject,
    html: htmlContent,
  });
};

module.exports = sendEmail;
