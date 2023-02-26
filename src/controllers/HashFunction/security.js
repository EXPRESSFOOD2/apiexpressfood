const { Password, Op } = require('../../db');
const { INVALID_LOGIN } = require("../../models/utils/User-ErrorMSGs")

// const hashFunction = async (pass, secret) => {
//   const iterations = 1001;
//   const encoder = new TextEncoder();
//   const data = encoder.encode(pass + secret);
//   let hash = await crypto.subtle.digest('SHA-256', data);
//     for (let i = 0; i < iterations; i++) {
//       hash = await crypto.subtle.digest('SHA-256', hash);
//     }
//     return hash;
//   /*Usage:
//      //!  cambiar el tipo de dato para almacenar la contraseña ?!
//     hashPassword(pass, secret).then((result) => {
//         const resu =  new Uint8Array(result);
//         const buffer = Buffer.from(uint8Array);   // Convierte en una cadena de texto
//         return buffer;
//     }
// });*/
// }

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



const getMercadoPagoFailureUrl = () => {
  return process.env.PAYMENT_FAIL_LOCAL_URL || process.env.PAYMENT_FAIL_DEPLOY_URL;
}


const getMercadoPagoSuccessUrl = () => {
  return process.env.PAYMENT_SUCCESS_LOCAL_URL || process.env.PAYMENT_SUCCESS_DEPLOY_URL;
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
    getMercadoPagoSuccessUrl,
    getMercadoPagoFailureUrl,
    getStoreId,
}