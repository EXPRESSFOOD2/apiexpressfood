const { MenuItem, Order, OrdersMenu, Op } = require("../../db");

const orderGetBalanceController = async ( store_id, startDate = "2022-06-02", endDate="2024-03-02" ) => {
  const orders = await Order.findAll({
    where: {
      store_id,
      status: { [Op.in]: ["Finished"] },
      createdAt: {
        [Op.between]: [startDate, endDate]
      }
    },
    order: [["updatedAt", "DESC"]],
  })
  const auxOrderIds = await orders.map(o => {
     return o.dataValues.id;
   })
  const result = await OrdersMenu.findAll({where: {OrderId: auxOrderIds}})
  let OrdersMenuCount = getTotalMenuItems(result)
  //! Sacar IDs de de la Tabla con menu Items y * quantity
  return OrdersMenuCount;
}

const getTotalMenuItems = (arrayOrdersMenu) => {
  const result = arrayOrdersMenu.reduce((acc, objeto = objeto.dataValues) => {
    const menuItemId = objeto.MenuItemId;
    const quantity = objeto.quantity;
    const existing = acc.find((item) => item.MenuItemId === menuItemId);
    if (existing) {
      existing.quantity += quantity;
    } else {
      acc.push({ MenuItemId: menuItemId, quantity: quantity });
    }
    return acc;
  }, []);

  return result;
}

const orderGetController = async (
  store_id = "f3bc0474-620c-429d-a46c-df2460c7725a",
  email
) => {
  let result 
  email ?  result = await Order.findAll({
    //! limit: 120,
    where: {
      store_id,
      status: { [Op.notIn]: ["Unpaid"] },
      client_data: email,
    },
    include: [{ model: MenuItem, attributes: ["name", "url_image"] }],
    attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
    order: [["updatedAt", "DESC"]],
  }) :  result = await Order.findAll({
    where: {
      store_id,
      status: { [Op.notIn]: ["Unpaid", "Finished"] },
    },
    include: [{ model: MenuItem, attributes: ["name", "url_image"] }],
    attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
    order: [["createdAt", "DESC"]],
  })

  return result;
};

const orderGetByIdController = async (
  id,
  store_id = "f3bc0474-620c-429d-a46c-df2460c7725a",
  email

) => {
let result
email ? result = await Order.findOne({
  where: { id, store_id, client_data: email },
  include: [{ model: MenuItem, attributes: ["name", "url_image"] }],
})
:
   result = await Order.findOne({
    where: { id, store_id },

    include: [{ model: MenuItem, attributes: ["name", "url_image"] }],
  });
  return result;
};

module.exports = {
  orderGetController,
  orderGetByIdController,
  orderGetBalanceController
};
