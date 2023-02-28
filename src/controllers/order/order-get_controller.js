const { MenuItem, Order, Op } = require("../../db");


const orderGetController = async (store_id) => {
  const result = await Order.findAll({
    where: { store_id, status: { [Op.notIn]: ['Unpaid', 'Finished'] } },
    include: [{ model: MenuItem, attributes: ["name"] } ],
    attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
    order: [["createdAt", "DESC"]],
  });

  return result;
};


const orderGetByIdController = async (id, store_id) => {
  const result = await Order.findOne({
    where: { id, store_id },
  });
  return result;
};

module.exports = {
    orderGetController,
    orderGetByIdController
};
