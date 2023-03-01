const { Order } = require("../../db");
const { ORDER_STATUS } = require("../../models/utils/constants")

const orderPatchController = async ( id, store_id, status ) => {
  //! TODO
  // Considerar agregar Construccion de un objeto a pasar para la modificacion
  const result = await Order.update({ status }, { where: { id, store_id } });
  //! if (status === ORDER_STATUS[4]) // Enviar el EMAIL para hacer REVIEW si el status == "Finished"
  return result;
}

module.exports = {
    orderPatchController
};
