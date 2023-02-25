const passport = require("passport");
const { User, Password, UsersRoles } = require("../../db");
const {
  generateSecret,
  hashFunction,generateToken
} = require("../HashFunction/security");

const {sendActivationEmail} = require("../htmlMessageMail/sendActivationEmail")


const secret = generateSecret();



const userPostController = async (
  name,
  last_name,
  account_name,
  password,
  email,
  phone,
  profile_image,
  role_id 
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
      
      profile_image
    });

    let user_id = newUser.id;
    let user_email = newUser.email;
!role_id ? role_id = 1: role_id = role_id
    await UsersRoles.create({ RoleId: role_id, UserId: user_id });
    await Password.create({
      user_id,
      password: hashedPass,
    
    });
    sendActivationEmail(user_email )
    
    return newUser;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  userPostController,

};
