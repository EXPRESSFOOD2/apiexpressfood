const { Order } = require("../../db");
const { ORDER_STATUS } = require("../../models/utils/constants")
const {sendEmail} = require('../htmlMessageMail/sendActivationEmail')
 
const orderPatchController = async ( id, store_id , status ) => {
  //! TODO
  // Considerar agregar Construccion de un objeto a pasar para la modificacion
  const result = await Order.update({ status }, { where: { id, store_id } });

  const orderDataToSendMail = await Order.findOne( {where:{order_id:id}} );
if(status === ORDER_STATUS[4]){
  const email = orderDataToSendMail.dataValues.client_data.email
  const orderCode = orderDataToSendMail.dataValues.code
  const orderId = orderDataToSendMail.dataValues.id

  
  sendEmail(email, orderCode, orderId)
  return result;}
  else{
    return result;
  }


}

module.exports = {
    orderPatchController
};
