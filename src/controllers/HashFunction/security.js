const { Password, Op } = require('../../db');
const { INVALID_LOGIN } = require("../../models/utils/User-ErrorMSGs")


const hashFunction = (pass, secret) => {

    return pass+secret+"hasheada";
}

const validateAccountPassword = async (userId, hashedPass) => {
    
    const result = await Password.findOne({where: {
        [Op.and]: [
          { user_id: userId },
          { password: hashedPass },
          { is_active: true }
        ]
      }})
      return result && result.id > 0 ? "Conected!!! Logged!!" : INVALID_LOGIN;
}


const generateSecret = () => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    const length = 8;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}
const generateToken = () => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    const length = 10;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

module.exports =  {
    hashFunction,
    generateSecret,
    validateAccountPassword,generateToken
}