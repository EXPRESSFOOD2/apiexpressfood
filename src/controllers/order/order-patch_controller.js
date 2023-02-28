const { Order } = require("../../db");

const orderPatchController = async ( id, store_id, status ) => {
  //! TODO
  // Considerar agregar Construccion de un objeto a pasar para la modificacion
  const result = await Order.update({ status }, { where: { id, store_id } });
  return result;
};

module.exports = {
    orderPatchController
};
