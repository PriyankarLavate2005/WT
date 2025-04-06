require('dotenv').config(); // Load environment variables
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// In-memory storage for OTPs and users (use a database in production)
function Loginauth(){
    const otpStorage = {};
const users = [
    { email: 'user@example.com', password: 'password' }, // Example user
];

// Generate a random 6-digit OTP
function generateOTP() {
    return crypto.randomInt(100000, 999999).toString();
}

// Send OTP via email
async function sendOTP(email, otp) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SMTP_USER, // Use environment variable for email
            pass: process.env.SMTP_PASS, // Use environment variable for password
        },
    });

    const mailOptions = {
        from: process.env.SMTP_USER,
        to: email, // Send OTP to the user's email
        subject: 'Your OTP for Password Reset',
        text: `Your OTP is: ${otp}`,
    };

    await transporter.sendMail(mailOptions);
}

// Login route
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
        res.json({ success: true, message: 'Login successful.' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid email or password.' });
    }
});

// Forgot Password route
app.post('/forgot-password', async (req, res) => {
    const { email } = req.body;

    const user = users.find((u) => u.email === email);

    if (user) {
        const otp = generateOTP();
        otpStorage[email] = otp; // Store OTP for the user

        await sendOTP(email, otp); // Send OTP to the user's email

        res.json({ success: true, message: 'OTP sent to your email.' });
    } else {
        res.status(404).json({ success: false, message: 'User not found.' });
    }
});

// Verify OTP route
app.post('/verify-otp', (req, res) => {
    const { email, otp } = req.body;

    if (otpStorage[email] === otp) {
        delete otpStorage[email]; // Clear OTP after verification
        res.json({ success: true, message: 'OTP verified successfully.' });
    } else {
        res.status(400).json({ success: false, message: 'Invalid OTP.' });
    }
});

// Reset Password route
app.post('/reset-password', (req, res) => {
    const { email, newPassword } = req.body;

    const user = users.find((u) => u.email === email);

    if (user) {
        user.password = newPassword; // Update the user's password
        res.json({ success: true, message: 'Password reset successfully.' });
    } else {
        res.status(404).json({ success: false, message: 'User not found.' });
    }
});

// Start the server

}
module.exports=Loginauth;