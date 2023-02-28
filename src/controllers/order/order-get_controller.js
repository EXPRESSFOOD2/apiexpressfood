const { MenuItem, Order, Op } = require("../../db");

const orderGetController = async (
  store_id = "f3bc0474-620c-429d-a46c-df2460c7725a",
  email
) => {
  const result = await Order.findAll({
    where: {
      store_id,
      status: { [Op.notIn]: ["Unpaid"] },
      client_data: email,
    },
    include: [{ model: MenuItem, attributes: ["name", "url_image"] }],
    attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
    order: [["createdAt", "DESC"]],
  });

  return result;
};

const orderGetByIdController = async (
  id,
  store_id = "f3bc0474-620c-429d-a46c-df2460c7725a",
  email

) => {
  const result = await Order.findOne({
    where: { id, store_id, client_data: email },
    include: [{ model: MenuItem, attributes: ["name", "url_image"] }],
  });
  return result;
};

module.exports = {
  orderGetController,
  orderGetByIdController,
};
