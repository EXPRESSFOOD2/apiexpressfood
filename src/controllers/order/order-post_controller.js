const{ Order, MenuItem } = require("../../db")

const ordersPostController = async ( products, client_data, store_id ) => {
    let menuItems = await getMenus(products);
    let total =  menuItems.reduce((accumulator, menu) => accumulator + menu.price, 0);
    let searchResult = await Order.findAll({ limit: 1, where: {store_id}, order: [["createdAt", "DESC"]]})
    let code = !searchResult.length ? "A000" : processCode(searchResult[0].code);
    const result = Order.create({ total, client_data, code, store_id })
    Order.addMenuItem(menuItems)
    return result
}
const getMenus = async (products) => {
    let arrIds = products.map( prod => prod.id );
    return await MenuItem.findAll({where: { id: arrIds }})
}
const processCode = (code) => {
    if (code === "Z999") return "A000";
    let letter = code.slice(0, 1);
    let number = parseInt(code.slice(1)) + 1;
    letter = String.fromCharCode(letter.charCodeAt(0) + Math.floor((number) / 1000));
    number = ('000' + number).slice(-3);
    return letter + number;
}

module.exports = {
    ordersPostController,
    
}