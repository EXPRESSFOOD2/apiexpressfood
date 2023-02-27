const { User } = require('../../db');
const { hashFunction, validateAccountPassword } = require("../HashFunction/security");
const { INVALID_LOGIN } = require("../../models/utils/User-ErrorMSGs")

const userLoginController = async (email, password) => {
 const user = await User.findOne({where: {email:email}})
    //! Excluir CAMPOS SENCIBLES!!! en el front veo el Secret!!!
    //! O cambiar el retorno
 if (user){
    const hashedPass = hashFunction(password, user.secret)
    const valid = await validateAccountPassword(user.id, hashedPass);
    //! un fn() que extrae el storeName segun el ID de usuario
    const storeName = "Pepito's Shop"
   //! Solucion posible:
   // return  valid? {valid, user: {name, last_name,AlgoMasQueNecesiteElFront}, storeName}: {valid}
    return  valid? {valid, user, storeName}: {valid}
 }else throw Error(INVALID_LOGIN)

}

module.exports = {
    userLoginController,
}