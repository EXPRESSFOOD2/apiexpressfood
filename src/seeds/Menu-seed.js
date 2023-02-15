const { MenuItem } = require("../db")
const lorem = `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería
 de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
 No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos,
 quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas 
 Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición,
  como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.`;

const FAKE_MENU = [
    {name: "Menu Veggie", description: lorem, price: 1000, recomend_first: true,  is_active: true, url_image: "https://thumbs.dreamstime.com/z/covered-dish-icon-drop-shadow-silhouette-symbol-restaurant-food-serving-dish-platter-lid-negative-space-vector-illustration-125303590.jpg"},
    {name: "Menu Veggie x2", description: lorem, price: 1000, recomend_first: true,  is_active: true, url_image: "https://thumbs.dreamstime.com/z/covered-dish-icon-drop-shadow-silhouette-symbol-restaurant-food-serving-dish-platter-lid-negative-space-vector-illustration-125303590.jpg"},
    {name: "Menu Veggie x3 ", description: lorem, price: 1000, recomend_first: true,  is_active: false, url_image: "https://thumbs.dreamstime.com/z/covered-dish-icon-drop-shadow-silhouette-symbol-restaurant-food-serving-dish-platter-lid-negative-space-vector-illustration-125303590.jpg"},
    {name: "Menu Veggie 4Ever", description: lorem, price: 1000, recomend_first: false,  is_active: true, url_image: "https://thumbs.dreamstime.com/z/covered-dish-icon-drop-shadow-silhouette-symbol-restaurant-food-serving-dish-platter-lid-negative-space-vector-illustration-125303590.jpg"},
    {name: "Menu Veggie KillMePlz", description: lorem, price: 1000, recomend_first: false,  is_active: true, url_image: "https://thumbs.dreamstime.com/z/covered-dish-icon-drop-shadow-silhouette-symbol-restaurant-food-serving-dish-platter-lid-negative-space-vector-illustration-125303590.jpg"},
    {name: "Menu Veggie Full", description: lorem, price: 1000, recomend_first: false,  is_active: true, url_image: "https://thumbs.dreamstime.com/z/covered-dish-icon-drop-shadow-silhouette-symbol-restaurant-food-serving-dish-platter-lid-negative-space-vector-illustration-125303590.jpg"},

]

module.exports = function () {
    MenuItem.bulkCreate(FAKE_MENU)
}