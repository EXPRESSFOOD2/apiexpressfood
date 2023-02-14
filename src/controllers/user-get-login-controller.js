const { User, Password, Role, UsersRoles } = require('../db');
const { hashFunction, validateAccountPassword } = require("./HashFunction/security");
const { INVALID_LOGIN } = require("../models/utils/User-ErrorMSGs")

const userLoginController = async (account_name, password) => {
 const user = await User.findOne({where: {account_name}})

 if (user){
    const hashedPass = hashFunction(password, user.secret)
    return await validateAccountPassword(user.id, hashedPass);
 }else throw Error(INVALID_LOGIN)

}

module.exports = {
    userLoginController,

}