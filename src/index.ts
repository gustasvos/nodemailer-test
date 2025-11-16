const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
import dotenv from "dotenv";
dotenv.config();

const emailTemplatePath = path.join(__dirname, 'emailTemplate.html')
const emailTemplate = fs.readFileSync(emailTemplatePath, 'utf8')

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
            from: `"Kingfisher" <${process.env.GMAIL_USER}>`,
            to: `${process.env.EMAIL_RECEIVER}`,
            subject: 'Test Email from Nodemailer',
            text: 'Hello! This is a plain text email.',
            html: emailTemplate
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.messageId);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

sendEmail()
