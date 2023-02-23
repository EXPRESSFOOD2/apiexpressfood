const passport = require("passport");
const { User, Password, UsersRoles } = require("../../db");
const {
  generateSecret,
  hashFunction,generateToken
} = require("../HashFunction/security");

const {sendActivationEmail} = require("../htmlMessageMail/sendActivationEmail")


const secret = generateSecret();
const token = generateToken();


const userPostController = async (
  name,
  last_name,
  account_name,
  password,
  email,
  phone,
  password_question,
  password_answer,
  profile_image,
  role_id = 1,
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
      profile_image
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
    sendActivationEmail(user_email )
    
    return newUser;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  userPostController,
  token,
};
