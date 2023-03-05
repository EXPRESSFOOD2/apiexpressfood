const { Order, Op, OrdersMenu, MenuItem } = require("../db");
const {value} = require("../seeds/index")




module.exports = async (io) => {
  console.log("tuki");
  
  
  const orders = new Promise((resolve, reject) => {

    setTimeout(async () => {
      let result = await Order.findAll({
        where: { status: { [Op.in]: ["En Progreso"] } },
        include: [{ model: MenuItem }],
      });
      resolve(result);
    }, 8000);
  });
  const result = await orders;
//   console.log(orders);
  console.log(result);
  // let data = await Promise.all(
  //   result.map(async (result) => {
  //     const resultMenu = result.MenuItems.map((menu) => {
  //       console.log('entramos');
  //       console.log(menu.dataValues.name);
  //       return {
  //         name: menu.dataValues.name,
  //       };
  //     });

  //     return {
  //       order_1: result.id,
  //       code: result.code,
  //       client: result.client_data,
  //       status: result.status,
  //       datas: resultMenu,
  //     };
  //   })
  // );

  // console.log(data);

  io.on("connection", (socket) => {
    console.log("a user connected" + socket.id);

    // socket.on("prueba", (data, cb) => {
    //   console.log(data);
    //   cb();
    // })
    socket.emit('allOrder', result)
    // socket.emit("sendOrders",({hola:'hola'}) )
    socket.on("updateOrders",()=>{

      socket.emit("sendOrders",(result) )
    })
  });
};
