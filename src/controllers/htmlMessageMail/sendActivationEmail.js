const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
const htmlPath = path.join(__dirname, "message.html");
const html = fs.readFileSync(htmlPath, "utf8");


const sendActivationEmail = (email) => {
  //CODIGO QUE ENVIA CORREO AL CLIENTE PARA LA ACTIVACION DE LA CUENTA
  const transporter = nodemailer.createTransport(
    "smtps://expressfoodhenry@gmail.com:ngvootjfbrkbefub@smtp.gmail.com"
  );

  const mailOptions = {
    from: "ExpressFood",
    to: email,
    subject: "Activacion de cuenta",
    html: html,
   
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log(err);
  });
};

module.exports = { sendActivationEmail };
