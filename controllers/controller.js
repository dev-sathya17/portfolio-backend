const sendEmail = require("../helpers/email");

const controller = {
  sendMail: async (req, res) => {
    try {
      const { name, email, message } = req.body;
      const subject = `New Inquiry from Portfolio Website from ${name}`;
      const body = `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
          }
          .container {
            background-color: #fff;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }
          h2 {
            color: #333;
          }
          p {
            color: #555;
          }
          .footer {
            margin-top: 20px;
            font-size: 0.9em;
            color: #777;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>New Inquiry from Your Portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <div class="footer">
            <p>This email was sent automatically from your portfolio website.</p>
          </div>
        </div>
      </body>
    </html>
        `;
      sendEmail(email, subject, body);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error sending email" });
    }
  },
};

module.exports = controller;
