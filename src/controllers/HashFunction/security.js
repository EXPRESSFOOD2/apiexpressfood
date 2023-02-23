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
      console.log(result);
      console.log(userId + " HashPswd: "+hashedPass );
      return ( result && result.id > 0 ? true : false );
}


const generateSecret = () => {
    const length = 8;
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

const generateToken = () => {
    /*let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    const length = 16;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;*/
    return generateSecret()+generateSecret();
}

const getStoreId = () => {
  //! TODO
  // Revisar implementacion
  return "f3bc0474-620c-429d-a46c-df2460c7725a"
}
module.exports =  {
    hashFunction,
    generateSecret,
    validateAccountPassword,
    generateToken,
    getStoreId
}