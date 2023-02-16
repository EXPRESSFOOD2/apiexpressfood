//const {menuItemsPostController} = require("../controllers/menuItem/menuItem-post_controller")
const { MenuItem, IngredientsMenuItems } = require("../db")
const lorem = `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería
 de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
 No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos,
 quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas 
 Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición,
  como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.`;

const FAKE_MENU = [
    {name: "Menu Veggie", description: lorem, price: 100, recomend_first: true,  is_active: true, url_image: "https://thumbs.dreamstime.com/z/covered-dish-icon-drop-shadow-silhouette-symbol-restaurant-food-serving-dish-platter-lid-negative-space-vector-illustration-125303590.jpg"},
    {name: "Menu Veggie x2", description: lorem, price: 101, recomend_first: true,  is_active: true, url_image: "https://thumbs.dreamstime.com/z/covered-dish-icon-drop-shadow-silhouette-symbol-restaurant-food-serving-dish-platter-lid-negative-space-vector-illustration-125303590.jpg"},
    {name: "Menu Veggie x3 ", description: lorem, price: 102, recomend_first: true,  is_active: false, url_image: "https://thumbs.dreamstime.com/z/covered-dish-icon-drop-shadow-silhouette-symbol-restaurant-food-serving-dish-platter-lid-negative-space-vector-illustration-125303590.jpg"},
    {name: "Menu Veggie 4Ever", description: lorem, price: 103, recomend_first: false,  is_active: true, url_image: "https://thumbs.dreamstime.com/z/covered-dish-icon-drop-shadow-silhouette-symbol-restaurant-food-serving-dish-platter-lid-negative-space-vector-illustration-125303590.jpg"},
    {name: "Menu Veggie KillMePlz", description: lorem, price: 104, recomend_first: false,  is_active: true, url_image: "https://thumbs.dreamstime.com/z/covered-dish-icon-drop-shadow-silhouette-symbol-restaurant-food-serving-dish-platter-lid-negative-space-vector-illustration-125303590.jpg"},
    {name: "Menu Veggie Full", description: lorem, price: 105, recomend_first: false,  is_active: true, url_image: "https://thumbs.dreamstime.com/z/covered-dish-icon-drop-shadow-silhouette-symbol-restaurant-food-serving-dish-platter-lid-negative-space-vector-illustration-125303590.jpg"},
    {name: "Menu Veggie KillMePlz v2", description: lorem, price: 104, recomend_first: false,  is_active: true, url_image: "https://thumbs.dreamstime.com/z/covered-dish-icon-drop-shadow-silhouette-symbol-restaurant-food-serving-dish-platter-lid-negative-space-vector-illustration-125303590.jpg"},
    {name: "Menu Veggie Full v2", description: lorem, price: 105, recomend_first: false,  is_active: true, url_image: "https://thumbs.dreamstime.com/z/covered-dish-icon-drop-shadow-silhouette-symbol-restaurant-food-serving-dish-platter-lid-negative-space-vector-illustration-125303590.jpg"},
    {name: "Menu Veggie KillMePlz v3", description: lorem, price: 104, recomend_first: false,  is_active: true, url_image: "https://thumbs.dreamstime.com/z/covered-dish-icon-drop-shadow-silhouette-symbol-restaurant-food-serving-dish-platter-lid-negative-space-vector-illustration-125303590.jpg"},
    {name: "Menu Veggie Full v3", description: lorem, price: 105, recomend_first: false,  is_active: true, url_image: "https://thumbs.dreamstime.com/z/covered-dish-icon-drop-shadow-silhouette-symbol-restaurant-food-serving-dish-platter-lid-negative-space-vector-illustration-125303590.jpg"},
    {name: "Menu Veggie KillMePlz v4", description: lorem, price: 104, recomend_first: false,  is_active: true, url_image: "https://thumbs.dreamstime.com/z/covered-dish-icon-drop-shadow-silhouette-symbol-restaurant-food-serving-dish-platter-lid-negative-space-vector-illustration-125303590.jpg"},
    {name: "Menu Veggie Full v4", description: lorem, price: 105, recomend_first: false,  is_active: true, url_image: "https://thumbs.dreamstime.com/z/covered-dish-icon-drop-shadow-silhouette-symbol-restaurant-food-serving-dish-platter-lid-negative-space-vector-illustration-125303590.jpg"},
    {name: "Menu Veggie KillMePlz v5", description: lorem, price: 104, recomend_first: false,  is_active: true, url_image: "https://thumbs.dreamstime.com/z/covered-dish-icon-drop-shadow-silhouette-symbol-restaurant-food-serving-dish-platter-lid-negative-space-vector-illustration-125303590.jpg"},
    {name: "Menu Veggie Full v5", description: lorem, price: 105, recomend_first: false,  is_active: true, url_image: "https://thumbs.dreamstime.com/z/covered-dish-icon-drop-shadow-silhouette-symbol-restaurant-food-serving-dish-platter-lid-negative-space-vector-illustration-125303590.jpg"},
    {name: "Menu Veggie KillMePlz v6", descrip20tion: lorem, price: 104, recomend_first: false,  is_active: true, url_image: "https://thumbs.dreamstime.com/z/covered-dish-icon-drop-shadow-silhouette-symbol-restaurant-food-serving-dish-platter-lid-negative-space-vector-illustration-125303590.jpg"},
    {name: "Menu Veggie Full v6", description: lorem, price: 105, recomend_first: false,  is_active: true, url_image: "https://thumbs.dreamstime.com/z/covered-dish-icon-drop-shadow-silhouette-symbol-restaurant-food-serving-dish-platter-lid-negative-space-vector-illustration-125303590.jpg"},
    {name: "Menu Veggie KillMePlz v7", description: lorem, price: 104, recomend_first: true,  is_active: true, url_image: "https://thumbs.dreamstime.com/z/covered-dish-icon-drop-shadow-silhouette-symbol-restaurant-food-serving-dish-platter-lid-negative-space-vector-illustration-125303590.jpg"},
    {name: "Menu Veggie Full v7", description: lorem, price: 105, recomend_first: false,  is_active: false, url_image: "https://thumbs.dreamstime.com/z/covered-dish-icon-drop-shadow-silhouette-symbol-restaurant-food-serving-dish-platter-lid-negative-space-vector-illustration-125303590.jpg"},
    {name: "Menu Veggie KillMePlz v8", description: lorem, price: 104, recomend_first: true,  is_active: true, url_image: "https://thumbs.dreamstime.com/z/covered-dish-icon-drop-shadow-silhouette-symbol-restaurant-food-serving-dish-platter-lid-negative-space-vector-illustration-125303590.jpg"},
    {name: "Menu Veggie Full v8", description: lorem, price: 105, recomend_first: false,  is_active: false, url_image: "https://thumbs.dreamstime.com/z/covered-dish-icon-drop-shadow-silhouette-symbol-restaurant-food-serving-dish-platter-lid-negative-space-vector-illustration-125303590.jpg"},

]
//(name, description, price, recomend_first, stock, is_active, url_image, ingredArray )
const FAKE_MENU_RELATIONS = [
    /*{MenuItemId: 1, IngredientId: 29, quantity: 1},
    {MenuItemId: 1, IngredientId: 20, quantity: 1},
    {MenuItemId: 2, IngredientId: 29, quantity: 2},
    {MenuItemId: 2, IngredientId: 20, quantity: 2},
    {MenuItemId: 3, IngredientId: 29, quantity: 3},
    {MenuItemId: 3, IngredientId: 20, quantity: 3},
    {MenuItemId: 4, IngredientId: 20, quantity: 4},
    {MenuItemId: 4, IngredientId: 29, quantity: 4},

    {MenuItemId: 5, IngredientId: 29, quantity: 4},
    {MenuItemId: 5, IngredientId: 21, quantity: 4},
    {MenuItemId: 5, IngredientId: 27, quantity: 4},
    {MenuItemId: 5, IngredientId: 22, quantity: 4},

    {MenuItemId: 6, IngredientId: 29, quantity: 4},
    {MenuItemId: 6, IngredientId: 21, quantity: 4},
    {MenuItemId: 6, IngredientId: 27, quantity: 4},
    {MenuItemId: 6, IngredientId: 22, quantity: 4},
    {MenuItemId: 6, IngredientId: 29, quantity: 1},

    {MenuItemId: 7, IngredientId: 29, quantity: 4},
    {MenuItemId: 7, IngredientId: 21, quantity: 4},
    {MenuItemId: 7, IngredientId: 27, quantity: 4},
    {MenuItemId: 7, IngredientId: 22, quantity: 4},

    {MenuItemId: 8, IngredientId: 29, quantity: 4},
    {MenuItemId: 8, IngredientId: 21, quantity: 4},
    {MenuItemId: 8, IngredientId: 27, quantity: 4},
    {MenuItemId: 8, IngredientId: 22, quantity: 4},
    {MenuItemId: 8, IngredientId: 29, quantity: 1},

    {MenuItemId: 9, IngredientId: 29, quantity: 4},
    {MenuItemId: 9, IngredientId: 21, quantity: 4},
    {MenuItemId: 9, IngredientId: 27, quantity: 4},
    {MenuItemId: 9, IngredientId: 22, quantity: 4},

    {MenuItemId: 10, IngredientId: 29, quantity: 4},
    {MenuItemId: 10, IngredientId: 21, quantity: 4},
    {MenuItemId: 10, IngredientId: 27, quantity: 4},
    {MenuItemId: 10, IngredientId: 22, quantity: 4},
    {MenuItemId: 10, IngredientId: 29, quantity: 1},

    {MenuItemId: 11, IngredientId: 29, quantity: 4},
    {MenuItemId: 11, IngredientId: 21, quantity: 4},
    {MenuItemId: 11, IngredientId: 27, quantity: 4},
    {MenuItemId: 11, IngredientId: 22, quantity: 4},

    {MenuItemId: 12, IngredientId: 29, quantity: 4},
    {MenuItemId: 12, IngredientId: 21, quantity: 4},
    {MenuItemId: 12, IngredientId: 27, quantity: 4},
    {MenuItemId: 12, IngredientId: 22, quantity: 4},
    {MenuItemId: 12, IngredientId: 29, quantity: 1},

    {MenuItemId: 13, IngredientId: 29, quantity: 4},
    {MenuItemId: 13, IngredientId: 21, quantity: 4},
    {MenuItemId: 13, IngredientId: 27, quantity: 4},
    {MenuItemId: 13, IngredientId: 22, quantity: 4},

    {MenuItemId: 14, IngredientId: 29, quantity: 4},
    {MenuItemId: 14, IngredientId: 21, quantity: 4},
    {MenuItemId: 14, IngredientId: 27, quantity: 4},
    {MenuItemId: 14, IngredientId: 22, quantity: 4},
    {MenuItemId: 14, IngredientId: 29, quantity: 1},

    {MenuItemId: 15, IngredientId: 29, quantity: 4},
    {MenuItemId: 15, IngredientId: 21, quantity: 4},
    {MenuItemId: 15, IngredientId: 27, quantity: 4},
    {MenuItemId: 15, IngredientId: 22, quantity: 4},

    {MenuItemId: 16, IngredientId: 29, quantity: 4},
    {MenuItemId: 16, IngredientId: 21, quantity: 4},
    {MenuItemId: 16, IngredientId: 27, quantity: 4},
    {MenuItemId: 16, IngredientId: 22, quantity: 4},
    {MenuItemId: 16, IngredientId: 29, quantity: 1},

    {MenuItemId: 17, IngredientId: 29, quantity: 4},
    {MenuItemId: 17, IngredientId: 21, quantity: 4},
    {MenuItemId: 17, IngredientId: 27, quantity: 4},
    {MenuItemId: 17, IngredientId: 22, quantity: 4},

    {MenuItemId: 18, IngredientId: 29, quantity: 4},
    {MenuItemId: 18, IngredientId: 21, quantity: 4},
    {MenuItemId: 18, IngredientId: 27, quantity: 4},
    {MenuItemId: 18, IngredientId: 22, quantity: 4},
    {MenuItemId: 18, IngredientId: 29, quantity: 1},

    {MenuItemId: 19, IngredientId: 29, quantity: 4},
    {MenuItemId: 19, IngredientId: 21, quantity: 4},
    {MenuItemId: 19, IngredientId: 27, quantity: 4},
    {MenuItemId: 19, IngredientId: 22, quantity: 4},

    {MenuItemId: 20, IngredientId: 29, quantity: 4},
    {MenuItemId: 20, IngredientId: 21, quantity: 4},
    {MenuItemId: 20, IngredientId: 27, quantity: 4},
    {MenuItemId: 20, IngredientId: 22, quantity: 4},
*/
]


module.exports = async function () {
    await MenuItem.bulkCreate(FAKE_MENU)
    await IngredientsMenuItems.bulkCreate(FAKE_MENU_RELATIONS)
}