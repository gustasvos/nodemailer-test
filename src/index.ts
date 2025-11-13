const nodemailer = require('nodemailer');
import dotenv from "dotenv";
dotenv.config();

async function sendEmail() {
    try {
        // Create transporter using Gmail SMTP
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD
            }
        });

        // Email details
        const mailOptions = {
            from: `"My App" <${process.env.GMAIL_USER}>`,
            to: 'gustavo.rosa5@fatec.sp.gov.br',
            subject: 'Test Email from Nodemailer',
            text: 'Hello! This is a plain text email.',
            html: '<h1>Hello!</h1><p>This is an HTML email.</p>'
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.messageId);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

// Run the function
sendEmail();
