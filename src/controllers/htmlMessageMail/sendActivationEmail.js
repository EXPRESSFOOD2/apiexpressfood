const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
const htmlPath = path.join(__dirname, "message.html");
const html = fs.readFileSync(htmlPath, "utf8");

const sendActivationEmail = (email, others ) => {
  //CODIGO QUE ENVIA CORREO AL CLIENTE PARA LA ACTIVACION DE LA CUENTA
  const transporter = nodemailer.createTransport(
    "smtps://spacefoodhenry@gmail.com:eniffmyycbcjrjeg@smtp.gmail.com"
  );

  const mailOptionsRegistration = {
    from: "ExpressFood",
    to: email,
    subject: "Confirmacion de Registro",
    html: html,
   
  };

  const mailOptionsSuccesPayment = {
    from: "ExpressFood",
    to: email,
    subject: `Numero de orden ${others}`,
    html:html ,
   
  };

others ? mailOptions = mailOptionsSuccesPayment : mailOptions = mailOptionsRegistration
  transporter.sendMail(mailOptions, (err, info) => {
    // if (err) console.log(err);
  
  });
};
