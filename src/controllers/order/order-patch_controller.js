const { Order } = require("../../db");
const { ORDER_STATUS } = require("../../models/utils/constants")
const {sendEmail} = require('../htmlMessageMail/sendActivationEmail')
 
const orderPatchController = async ( id, store_id , status ) => {
  //! TODO
  // Considerar agregar Construccion de un objeto a pasar para la modificacion
  const result = await Order.update({ status }, { where: { id, store_id } });
  //! if (status === ORDER_STATUS[4]) // Enviar el EMAIL para hacer REVIEW si el status == "Finished"
if(status === ORDER_STATUS[4]){
  const email = result.dataValues.client_data.email
  const orderCode = result.dataValues.code
  const orderId = result.dataValues.id
  
  sendEmail(email, orderCode, orderId)
  return result;}
  else{
    return result;
  }


}

module.exports = {
    orderPatchController
};
