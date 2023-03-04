const {menuItemsPostController} = require("../controllers/menuItem/menuItem-post_controller")

const store_id = "f3bc0474-620c-429d-a46c-df2460c7725a"
const name = "Menu Solo";
const description = "Menu para uno con....";
const price = 12;
const recomend_first = true;
const stock = 100;
const is_active = true;
const url_image = "https://www.shutterstock.com/image-photo/cheeseburger-french-fries-soft-drink-260nw-319039442.jpg"
const ingredArray = [{ id: 24 , quantity: 1 },{ id:20, quantity: 1 }]

const description2 = "Menu para dos con....";
const ingredArray2 = [{ id: 24 , quantity: 2 },{ id:20, quantity: 2 }]

const description3 = "Menu para tres con....";
const ingredArray3 = [{ id: 24 , quantity: 3 },{ id:20, quantity: 3 }]

module.exports = async function() {
    setTimeout(() => { 
        menuItemsPostController(name, description, price, recomend_first, stock, is_active, url_image, ingredArray, store_id),
        menuItemsPostController("Menu pa dos", description2, 24, recomend_first, stock, is_active, url_image, ingredArray2, store_id),
        menuItemsPostController("Menu pa tres", description3, 35, recomend_first, stock, is_active, url_image, ingredArray3, store_id)
    }, 490)

}
