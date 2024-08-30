const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASS,
  },
  tls: {
    ciphers: "SSLv3",
  },
});

module.exports = {
  mailers: (email, message) => {
    return new Promise((resolve, reject) => {
      let mailOptions = {
        from: `webportofolio <${email}>`,
        to: process.env.MAIL_DESTINATION,
        subject: `Contact From ${email}`,
        html: message,
      };

      transport.sendMail(mailOptions, (error, info) => {
        if (error) {
          reject(error);
        } else {
          resolve(info);
        }
      });
    });
  },
};
