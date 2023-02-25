//const {menuItemsPostController} = require("../controllers/menuItem/menuItem-post_controller")
const { MenuItem, IngredientsMenuItems} = require("../db")
const lorem = `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería
 de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
 No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos,
 quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas 
 Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición,
  como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.`;

const FAKE_MENU = [

    {name: "Menu Veggie", description: lorem, price: 100, recomend_first: true, stock:30, is_active: true, url_image: "https://i.pinimg.com/originals/56/1d/c6/561dc63b846ef18e8e27fd096f1dabbd.jpg"},
    {name: "Menu Veggie x2", description: lorem, price: 101, recomend_first: true, stock:25, is_active: true, url_image: "https://www.cuponerapp.com/mexiconoce/wp-content/uploads/2018/05/cs.jpg"},
    {name: "Menu Veggie x3 ", description: lorem, price: 102, recomend_first: true, stock:15, is_active: false, url_image: "https://i.pinimg.com/236x/b8/c9/ed/b8c9ed3b166f01dc9976b8e217ddafbd--make-ahead-lunches-healthy-lunches.jpg"},
    {name: "Menu Veggie 4Ever", description: lorem, price: 103, recomend_first: false, stock:12, is_active: true, url_image: "https://www.elmueble.com/medio/2023/02/08/25-recetas-de-tupper-para-preparar-el-dia-antes_afc5e2b6_230208170301_900x900.jpg"},
    {name: "Menu Veggie Promo", description: lorem, price: 104, recomend_first: false, stock:10, is_active: true, url_image: "https://www.clara.es/medio/2021/12/16/que-comer-hoy-ideas_21beeb02_1200x630.jpg"},
    {name: "Menu Veggie Full", description: lorem, price: 105, recomend_first: false, stock:3, is_active: true, url_image: "https://www.henkelman.com/media/416697/halo-halo.jpg"},
    {name: "Menu Veggie Promo v2", description: lorem, price: 104, recomend_first: false, stock:21, is_active: true, url_image: "https://i.pinimg.com/736x/47/c8/60/47c86058c460d575882264033f836eba.jpg"},
    {name: "Menu Veggie Full v2", description: lorem, price: 105, recomend_first: false, stock:10, is_active: true, url_image: "https://pbs.twimg.com/media/CN-401QWUAAL_Uo.jpg"},
    {name: "Menu Veggie Promo v3", description: lorem, price: 104, recomend_first: false, stock:1, is_active: true, url_image: "https://www.2foodtrippers.com/wp-content/uploads/2021/04/Gargouillou-at-Maison-Bras-1024x683.jpg"},
    {name: "Menu Veggie Full v3", description: lorem, price: 105, recomend_first: false, stock:9, is_active: true, url_image: "https://img2.freepng.es/20190904/ybp/transparent-dish-food-cuisine-ingredient-junk-food-5d6f9dc89de022.1956361715675959766467.jpg"},
    {name: "Menu Veggie Promo v4", description: lorem, price: 104, recomend_first: false, stock:10, is_active: true, url_image: "https://media.viajando.travel/p/4a87b2a781792d440cee114bcd617bdf/adjuntos/255/imagenes/000/246/0000246989/comida-norte-argentino-3jpg.jpg"},
    {name: "Menu Veggie Full v4", description: lorem, price: 105, recomend_first: false, stock:15, is_active: true, url_image: "https://i.pinimg.com/originals/56/1d/c6/561dc63b846ef18e8e27fd096f1dabbd.jpg"},
    {name: "Menu Veggie Promo v5", description: lorem, price: 104, recomend_first: false, stock:3, is_active: true, url_image: "https://thumbs.dreamstime.com/z/covered-dish-icon-drop-shadow-silhouette-symbol-restaurant-food-serving-dish-platter-lid-negative-space-vector-illustration-125303590.jpg"},
    {name: "Menu Veggie Full v5", description: lorem, price: 105, recomend_first: false, stock:10, is_active: true, url_image: "https://www.cuponerapp.com/mexiconoce/wp-content/uploads/2018/05/cs.jpg"},
    {name: "Menu Veggie Promo v6", descrip20tion: lorem, price: 104, recomend_first: false, stock:5, is_active: true, url_image: "https://www.shutterstock.com/image-photo/ingredients-making-traditional-italian-sauce-260nw-1151927876.jpg"},
    {name: "Menu Veggie Full v6", description: lorem, price: 105, recomend_first: false, stock:10, is_active: true, url_image: "https://media.istockphoto.com/id/1295633127/es/foto/carne-de-pollo-a-la-parrilla-y-ensalada-de-verduras-frescas-de-tomate-aguacate-lechuga-y.jpg"},
    {name: "Menu Veggie Promo v7", description: lorem, price: 104, recomend_first: true, stock:8, is_active: true, url_image: "https://www.shutterstock.com/image-photo/grilled-chicken-breast-fillet-fresh-260nw-1713446386.jpg"},
    {name: "Menu Veggie Full v7", description: lorem, price: 105, recomend_first: false, stock:13, is_active: false, url_image: "https://pbs.twimg.com/media/CN-401QWUAAL_Uo.jpg"},
    {name: "Menu Veggie Promo v8", description: lorem, price: 104, recomend_first: true, stock:12, is_active: true, url_image: "https://www.shutterstock.com/image-photo/healthy-salad-bowl-quinoa-tomatoes-260nw-521741356.jpg"},
    {name: "Menu Veggie Full v8", description: lorem, price: 105, recomend_first: false, stock:19, is_active: false, url_image: "https://www.henkelman.com/media/416697/halo-halo.jpg"},



]

//(name, description, price, recomend_first, stock, is_active, url_image, ingredArray )
const FAKE_MENU_RELATIONS = [
    {MenuItemId: 1, IngredientId: 29, quantity: 1},
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
    {MenuItemId: 6, IngredientId: 28, quantity: 1},

    {MenuItemId: 7, IngredientId: 29, quantity: 4},
    {MenuItemId: 7, IngredientId: 21, quantity: 4},
    {MenuItemId: 7, IngredientId: 27, quantity: 4},
    {MenuItemId: 7, IngredientId: 22, quantity: 4},

    {MenuItemId: 8, IngredientId: 29, quantity: 4},
    {MenuItemId: 8, IngredientId: 21, quantity: 4},
    {MenuItemId: 8, IngredientId: 27, quantity: 4},
    {MenuItemId: 8, IngredientId: 22, quantity: 4},
    {MenuItemId: 8, IngredientId: 28, quantity: 1},

    {MenuItemId: 9, IngredientId: 29, quantity: 4},
    {MenuItemId: 9, IngredientId: 21, quantity: 4},
    {MenuItemId: 9, IngredientId: 27, quantity: 4},
    {MenuItemId: 9, IngredientId: 22, quantity: 4},

    {MenuItemId: 10, IngredientId: 29, quantity: 4},
    {MenuItemId: 10, IngredientId: 21, quantity: 4},
    {MenuItemId: 10, IngredientId: 27, quantity: 4},
    {MenuItemId: 10, IngredientId: 22, quantity: 4},
    {MenuItemId: 10, IngredientId: 28, quantity: 1},

    {MenuItemId: 11, IngredientId: 29, quantity: 4},
    {MenuItemId: 11, IngredientId: 21, quantity: 4},
    {MenuItemId: 11, IngredientId: 27, quantity: 4},
    {MenuItemId: 11, IngredientId: 22, quantity: 4},

    {MenuItemId: 12, IngredientId: 29, quantity: 4},
    {MenuItemId: 12, IngredientId: 21, quantity: 4},
    {MenuItemId: 12, IngredientId: 27, quantity: 4},
    {MenuItemId: 12, IngredientId: 22, quantity: 4},
    {MenuItemId: 12, IngredientId: 28, quantity: 1},

    {MenuItemId: 13, IngredientId: 29, quantity: 4},
    {MenuItemId: 13, IngredientId: 21, quantity: 4},
    {MenuItemId: 13, IngredientId: 27, quantity: 4},
    {MenuItemId: 13, IngredientId: 22, quantity: 4},

    {MenuItemId: 14, IngredientId: 29, quantity: 4},
    {MenuItemId: 14, IngredientId: 21, quantity: 4},
    {MenuItemId: 14, IngredientId: 27, quantity: 4},
    {MenuItemId: 14, IngredientId: 22, quantity: 4},
    {MenuItemId: 14, IngredientId: 28, quantity: 1},

    {MenuItemId: 15, IngredientId: 29, quantity: 4},
    {MenuItemId: 15, IngredientId: 21, quantity: 4},
    {MenuItemId: 15, IngredientId: 27, quantity: 4},
    {MenuItemId: 15, IngredientId: 22, quantity: 4},

    {MenuItemId: 16, IngredientId: 29, quantity: 4},
    {MenuItemId: 16, IngredientId: 21, quantity: 4},
    {MenuItemId: 16, IngredientId: 27, quantity: 4},
    {MenuItemId: 16, IngredientId: 22, quantity: 4},
    {MenuItemId: 16, IngredientId: 28, quantity: 1},

    {MenuItemId: 17, IngredientId: 29, quantity: 4},
    {MenuItemId: 17, IngredientId: 21, quantity: 4},
    {MenuItemId: 17, IngredientId: 27, quantity: 4},
    {MenuItemId: 17, IngredientId: 22, quantity: 4},

    {MenuItemId: 18, IngredientId: 29, quantity: 4},
    {MenuItemId: 18, IngredientId: 21, quantity: 4},
    {MenuItemId: 18, IngredientId: 27, quantity: 4},
    {MenuItemId: 18, IngredientId: 22, quantity: 4},
    {MenuItemId: 18, IngredientId: 28, quantity: 1},

    {MenuItemId: 19, IngredientId: 29, quantity: 4},
    {MenuItemId: 19, IngredientId: 21, quantity: 4},
    {MenuItemId: 19, IngredientId: 27, quantity: 4},
    {MenuItemId: 19, IngredientId: 22, quantity: 4},

    {MenuItemId: 20, IngredientId: 29, quantity: 4},
    {MenuItemId: 20, IngredientId: 21, quantity: 4},
    {MenuItemId: 20, IngredientId: 27, quantity: 4},
    {MenuItemId: 20, IngredientId: 22, quantity: 4},
    {MenuItemId: 20, IngredientId: 28, quantity: 1},

]


module.exports = async function () {
    await MenuItem.bulkCreate(FAKE_MENU)
    setTimeout(( async () => {
        await IngredientsMenuItems.bulkCreate(FAKE_MENU_RELATIONS)
    }), 700);

}