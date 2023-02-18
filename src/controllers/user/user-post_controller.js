const { User, Password, UsersRoles } = require("../../db");
const {
  generateSecret,
  hashFunction,
  generateToken,
} = require("../HashFunction/security");
const nodemailer = require("nodemailer");
const token = generateToken();
const secret = generateSecret();

const userPostController = async (
  name,
  last_name,
  account_name,
  password,
  email,
  phone,
  password_question,
  password_answer
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
    //* CONSIDERA QUE LA CUENTA ES ACTIVA
    //* Implementar activación por EMAIL


    const transporter = nodemailer.createTransport('smtps://expressfoodhenry@gmail.com:ngvootjfbrkbefub@smtp.gmail.com');

    const mailOptions= {
         from: "ExpressFood",
         to:email,
         subject: "Activacion de cuenta",
         text:`Que bueno que estas aqui!, para nosotros es un gusto poder
         brindarte los mejores platos para tu paladar!, no esperes mas!! da click al siguiente enlace
         para activar tu cuenta y empezar a disfrutar de esta aventura
         gastronomica!
         enlance de activacion: localhost:3001/users/activate_account/${token}`
    }

    transporter.sendMail(mailOptions, (err, info)=>{
        if(err)
         return err.message
        
 
    })

    await UsersRoles.create({ RoleId: 1, UserId: user_id }); //hardcodeado el codigo para forzar que estos usarios sean customers
    //se debe crear otro endpoint que use otro controlador para crear a los usuarios de la appstore
    await Password.create({
      user_id,
      password: hashedPass,
      password_question,
      password_answer,
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
