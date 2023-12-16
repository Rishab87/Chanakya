const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const registrationData = [];
const otpData = {};

app.post('/api/register', (req, res) => {
    const { first, last, gender, email, mobile, user, pass } = req.body;
    console.log('Received data:', req.body);
    registrationData.push({ first, last, gender, email, mobile, user, pass, otp: null });
    res.json({ message: 'Registration data saved successfully', user: { first, last, gender, email, mobile, user, pass } });
});

app.get('/api/register', (req, res) => {
    res.json(registrationData);
});

app.post('/api/check-email', (req, res) => {
    const { email } = req.body;
    const user = registrationData.find((u) => u.email === email);
    res.json({ exists: user !== undefined });
});

app.post('/api/send-otp', (req, res) => {
    const { email } = req.body;
    
    const user = registrationData.find((u) => u.email === email);
    if (user) {
        const otp = generateOTP();
        otpData[email] = otp;
        sendOTP(email, otp)
            .then(() => {
                res.json({ success: true, message: 'OTP sent successfully' });
            })
            .catch((error) => {
                res.json({ success: false, message: 'Failed to send OTP' });
            });
    } else {
        res.json({ success: false, message: 'Email not found' });
    }
});

app.post('/api/verify-otp', (req, res) => {
    const { email, otp } = req.body;
    
    if (otpData.hasOwnProperty(email) && otpData[email] == otp) {
        delete otpData[email];
        res.json({ success: true, message: 'OTP is correct. Redirecting to password reset.' });
    } else {
        res.json({ success: false, message: 'Invalid OTP' });
    }
});

function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000); // Generate a 4-digit OTP
}

function sendOTP(email, otp) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'dakshapjn@gmail.com', // Your Gmail email address
            pass: 'jpgf nkcq qlgo akpo', // Use the App Password here
        },
    });

    const mailOptions = {
        from: 'dakshapjn@gmail.com', // Your Gmail email address
        to: email,
        subject: 'OTP Verification',
        text: `Your OTP for verification is: ${otp}`,
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending OTP:', error);
                reject(error);
            } else {
                console.log('OTP sent:', info.response);
                resolve();
            }
        });
    });
}

app.post('/api/login', (req, res) => {
    const { user, pass } = req.body;
    checkUserCredentials(user, pass, res);
});

function checkUserCredentials(username, password, res) {
    const user = registrationData.find((u) => u.user === username);

    if (user && user.pass === password) {
        res.json({ success: true, message: 'Login successful' });
    } else {
        res.json({ success: false, message: 'Invalid username or password' });
    }
}

app.post('/api/update-password', (req, res) => {
    const { email, newPassword } = req.body;

    const user = registrationData.find((u) => u.email === email);
    if (user) {
        user.pass = newPassword; // Update the password
        res.json({ success: true, message: 'Password updated successfully' });
    } else {
        res.json({ success: false, message: 'User not found' });
    }
});


app.listen(port, () => {
    console.log(`API listening on port ${port}`);
});
