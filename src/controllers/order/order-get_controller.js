const { MenuItem, Order, OrdersMenu, Op, Review } = require("../../db");

const orderGetBalanceController = async ( store_id, startDate = "2022-06-02", endDate="2024-03-02" ) => {
  const orders = await Order.findAll({
    where: {
      store_id,
      status: { [Op.in]: ["Entregada"] },
      createdAt: {
        [Op.between]: [startDate, endDate]
      }
    },
    order: [["updatedAt", "DESC"]],
  })
  const auxOrderIds = await orders.map(o => {
     return o.dataValues.id;
   })
  //! Modularizar
  const totalSales = await getTotalSales(auxOrderIds)
  const result = await OrdersMenu.findAll({where: {OrderId: auxOrderIds}})
  let ordersMenuCount = getTotalMenuItems(result)
  let menuItemsIds = ordersMenuCount.map(e => e.MenuItemId)

  let processedMenus = await buildDetailMenuItem( ordersMenuCount, menuItemsIds)
  return {totalSales, salesPerMenu: processedMenus}
}

const buildDetailMenuItem = async (salesPerMenu, menuItemsId) => {
  let result;
  await MenuItem.findAll({
    attributes: ['id', 'name', 'url_image'],
    where: { id: menuItemsId },
  })
    .then((menuItems) => {
      const updatedSalesPerMenu = salesPerMenu.map((sale) => {
        const menuItem = menuItems.find(
          (item) => item.id === sale.MenuItemId
        );
        return {
          MenuItemId: sale.MenuItemId,
          name: menuItem.name,
          url_image: menuItem.url_image,
          quantity: sale.quantity,
        };
      });
    result = updatedSalesPerMenu;
    })
    .catch((error) => {
      //! Habilitar para manejar Errores
      //result = `Error al obtener los MenuItem: ${error}`;
    });
    return result;
}
const getTotalSales = async (ordersIds) => {
  let result;
  await Order.sum('total', { where: { id: ordersIds } })
  .then((total) => {
    result = total;
  })
  .catch((error) => {
    result = `We couldn't find any sales between this dates`;
  });

  return await result
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
      status: { [Op.notIn]: ["Sin Pagar"] },
      client_data: email,
    },
    include: [{ model: MenuItem, attributes: ["name", "url_image"] }],
    attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
    order: [["updatedAt", "DESC"]],
  }) :  result = await Order.findAll({
    where: {
      store_id,
      status: { [Op.notIn]: ["Sin Pagar", "Entregada"] },
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
  
  let existingRewiew = await Review.findAll({where:{OrdersMenuId:id}})
  let result = await Order.findOne({
    where: { id, store_id, client_data: email },
    include: [{ model: MenuItem, attributes: ["name", "url_image"] }],
  })
  if(!existingRewiew.length) {

return result;}
else{
    result.dataValues.hasReview = true;
    
    return result
  }

};

module.exports = {
  orderGetController,
  orderGetByIdController,
  orderGetBalanceController
};
