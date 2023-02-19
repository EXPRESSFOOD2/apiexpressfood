const { User, Password, UsersRoles } = require("../../db");
const {
  generateSecret,
  hashFunction,
} = require("../HashFunction/security");
const nodemailer = require("nodemailer");
const TOKEN_LENGTH = require("../../models/utils/constants")

const token = generateSecret(TOKEN_LENGTH);
const secret = generateSecret();

const userPostController = async (
  name,
  last_name,
  account_name,
  password,
  email,
  phone,
  password_question,
  password_answer,
  role_id = 1
) => {
  try {
    const hashedPass = hashFunction(password, secret);
    const newUser = await User.create({
      name,
      last_name,
      account_name,
      password,
      email,
      secret,
      phone,
      activation_token: token,
    });
    let user_id = newUser.id;
    let user_email = newUser.email;

    await UsersRoles.create({ RoleId: role_id, UserId: user_id });
    await Password.create({
      user_id,
      password: hashedPass,
      password_question,
      password_answer,
    });

    //CODIGO QUE ENVIA CORREO AL CLIENTE PARA LA ACTIVACION DE LA CUENTA
    const transporter = nodemailer.createTransport(
      "smtps://expressfoodhenry@gmail.com:ngvootjfbrkbefub@smtp.gmail.com"
    );

    const mailOptions = {
      from: "ExpressFood",
      to: user_email,
      subject: "Activacion de cuenta",
      html: `Que bueno que estas aqui!, para nosotros es un gusto poder
         brindarte los mejores platos para tu paladar!, no esperes mas!! da click al siguiente enlace
         para activar tu cuenta y empezar a disfrutar de esta aventura
         gastronomica!
         enlance de activacion: localhost:3001/users/activate_account/${token}`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) return err.message;
    });
    return newUser;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  userPostController,
  token,
};
