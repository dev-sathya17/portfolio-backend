const { EMAIL_ID } = require("../utils/config");
const transporter = require("../utils/transporter");
const sendEmail = (email, subject, text) => {
  const mailOptions = {
    from: email,
    to: EMAIL_ID,
    subject: subject,
    html: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return false;
    } else {
      console.log("Email sent: " + info.response);
      return true;
    }
  });
};

module.exports = sendEmail;
