const { User, Password, UsersRoles } = require("../../db");
const {
  generateSecret,
  hashFunction
} = require("../HashFunction/security");
const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");

const filePath = path.join(__dirname, "../htmlMessageMail/message.html"); // construct the absolute file path
const html = fs.readFileSync(filePath, "utf-8"); //


const userPostController = async ( name, last_name, account_name, password, email, phone,
                                  password_question, password_answer, profile_image,  role_id = 1 ) => {
                                                    // Este role_id debería desaparecer
  try {
    const secret = generateSecret();
    const hashedPass = hashFunction(password, secret);
    const newUser = await User.create({name, last_name, account_name, password, email,
                                      secret, phone, activation_token:  profile_image });
    let user_id = newUser.id;
    let user_email = newUser.email;

    await UsersRoles.create({ RoleId: role_id, UserId: user_id });
    await Password.create({ user_id, password: hashedPass, password_question, password_answer });

    //CODIGO QUE ENVIA CORREO AL CLIENTE PARA LA ACTIVACION DE LA CUENTA
    const transporter = nodemailer.createTransport(
      "smtps://expressfoodhenry@gmail.com:ngvootjfbrkbefub@smtp.gmail.com"
    );

    const mailOptions = getMailOptions( user_email);

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) return err.message;
    });
    return newUser;
  } catch (error) {
    return error.message;
  }
};
const getMailOptions = (user_email) => {
  return {
    from: "ExpressFood",
    to: user_email,
    subject: "Registro Existoso",
    html: html
  };
}

module.exports = {
  userPostController,
};