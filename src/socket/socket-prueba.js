const {Order ,Op , OrdersMenu , MenuItem} = require('../db')
module.exports =  async(io)=>{
    console.log('tuki');
    console.log( Order);
    
    const orders = new Promise((resolve, reject) =>{
        setTimeout(async () =>{
            let result = await Order.findAll({ where:{status:{[Op.in] :["In Progress"]}},include: [{ model: MenuItem, attributes: ["name", "url_image"] }], });
            resolve(result);
        },8000)  
    })
    const result = await orders
    // console.log(data);
    let data = await Promise.all(result.map(async(result)=>{
        
        // const detailOrder = await OrdersMenu.findAll({where:
        //     { OrderId:result.id} , include:[{model:MenuItem}]
        // })
        return {
            order_1:result.id,
            code : result.code,
            client : result.client_data,
            status: result.status,
            // datas : detailOrder
        }
    }))
    console.log(result)
    console.log(data)

    // let result2 = await Order.findAll();
    
    // console.log(result2);
    io.on('connection', (socket)=>{
        console.log('a user connected' + socket.id);

        socket.on('prueba',(data, cb)=>{
            console.log(data);
            cb()
        })
    });

}