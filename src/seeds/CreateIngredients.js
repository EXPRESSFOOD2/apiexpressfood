const { Ingredient } = require('../db');
const FAKE_INGREDEINTS = [
{ ingredient_id: 1, name: "Banana organica", type_measure: "gr", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" },
{ ingredient_id: 2, name: "Ananá orgánico caribeño", type_measure: "un", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" },
{ ingredient_id: 3, name: "Kiwi orgánico neozelandes", type_measure: "un", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" },
{ ingredient_id: 4, name: "Manzanas organicas Oregon", type_measure: "gr", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" },
{ ingredient_id: 5, name: "Uva orgánica verde de Canadá", type_measure: "gr", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a"  },
{ ingredient_id: 6, name: "Rosas naturistas", type_measure: "un", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a"  },
{ ingredient_id: 7, name: "Flores decorativas de ramo", type_measure: "un", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" },
{ ingredient_id: 8, name: "Uva negra orgánica californiana", type_measure: "gr", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" },
{ ingredient_id: 9, name: "Ciruela orgánica", type_measure: "gr", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" },
{ ingredient_id: 10, name: "Flores silvestres deco", type_measure: "un", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" },
{ ingredient_id: 11, name: "Granada Italiana organic", type_measure: "un", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" },
{ ingredient_id: 12, name: "Uva perita amarilla", type_measure: "gr", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" },
{ ingredient_id: 13, name: "Manzana verde", type_measure: "gr", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" },
{ ingredient_id: 14, name: "Pomelo de Florída", type_measure: "gr", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" },
{ ingredient_id: 15, name: "Banana orgánica Ecuador", type_measure: "gr", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" },
{ ingredient_id: 16, name: "Frutilla de Oregon ", type_measure: "gr", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" },
{ ingredient_id: 17, name: "Frambuesa de Oregon", type_measure: "gr", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" },
{ ingredient_id: 18, name: "Fruta de Dragon", type_measure: "un", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" },
{ ingredient_id: 19, name: "Pelón South Organics", type_measure: "gr", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" },
{ ingredient_id: 20, name: "Melón naranja", type_measure: "un", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a"  },
{ ingredient_id: 21, name: "Melón Verde", type_measure: "un", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a"  },
{ ingredient_id: 22, name: "Canasto rectangular con tapa", type_measure: "un", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a"  },
{ ingredient_id: 23, name: "Canasto modelo 1", type_measure: "un", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" },
{ ingredient_id: 24, name: "Canasto modelo 2", type_measure: "un", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" },
{ ingredient_id: 25, name: "Canasto modelo 3", type_measure: "un", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a"  },
{ ingredient_id: 26, name: "Canasto modelo 4", type_measure: "un", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a"  },
{ ingredient_id: 27, name: "Canasto modelo 5", type_measure: "un", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" },
{ ingredient_id: 28, name: "Naranja organica de Florida", type_measure: "gr", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a"  },
{ ingredient_id: 29, name: "Naranja Dakota Organics", type_measure: "gr", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" },
{ ingredient_id: 30, name: "Mango Venezolano", type_measure: "un", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" },
{ ingredient_id: 31, name: "Pera Exttra Organics Farms", type_measure: "gr", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" },
{ ingredient_id: 32, name: "canasto modelo 7", type_measure: "un", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" },
{ ingredient_id: 33, name: "canasto modelo 6", type_measure: "un", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" },
{ ingredient_id: 34, name: "canasto modelo 8", type_measure: "un", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" },
{ ingredient_id: 35, name: "Mora Silvestre 100%", type_measure: "gr", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" },
{ ingredient_id: 36, name: "Calabaza Dulce", type_measure: "un", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" },
{ ingredient_id: 37, name: "Kaki turco de la granja", type_measure: "gr", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" },
{ ingredient_id: 38, name: "Higo Gigante ", type_measure: "gr", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" },
{ ingredient_id: 39, name: "Mango Colombiano", type_measure: "un", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" },
]


/* const FAKE_INGREDEINTS = [
    {name: "Agua",layer: 0, ingredients_all: [], type_measure: "ml", store_id: ", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" "},
    {name: "Harina",layer: 0 , ingredients_all: [], type_measure: "gr", store_id: ", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" "},
    {name: "Huevo",layer: 0 , ingredients_all: [], type_measure: "un", store_id: ", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" "},
    {name: "Azucar",layer: 0 , ingredients_all: [], type_measure: "gr", store_id: ", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" "},
    {name: "Sal", layer: 0 , ingredients_all: [], type_measure: "gr", store_id: ", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" "},
    {name: "Carne",layer: 0 , ingredients_all: [], type_measure: "gr", store_id: ", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" "},
    {name: "Cebolla",layer: 0 , ingredients_all: [], type_measure: "gr", store_id: ", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" "},
    {name: "Tomate",layer: 0 , ingredients_all: [], type_measure: "gr", store_id: ", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" "},
    {name: "Lechuga",layer: 0 , ingredients_all: [], type_measure: "gr", store_id: ", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" "},
    {name: "Pimienta",layer: 0 , ingredients_all: [], type_measure: "gr", store_id: ", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" "},
    {name: "Queso Mozzarella",layer: 0 , ingredients_all: [], type_measure: "gr", store_id: ", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" "},
    {name: "Carne Molida",layer: 0 , ingredients_all: [], type_measure: "gr", store_id: ", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" "},
    {name: "Pan Hamburguesa",layer: 0 , ingredients_all: [], type_measure: "un", store_id: ", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" "},
    {name: "Ketchup",layer: 0 , ingredients_all: [], type_measure: "gr", store_id: ", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" "},
    {name: "Mayonesa",layer: 0 , ingredients_all: [], type_measure: "gr", store_id: ", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" "},
    {name: "Levadura Fresca",layer: 0 , ingredients_all: [], type_measure: "gr", store_id: ", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" "},
    {name: "Aceite de Oliva",layer: 0 , ingredients_all: [], type_measure: "ml", store_id: ", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" "},
    {name: "Queso Cheddar",layer: 0 , ingredients_all: [], type_measure: "gr", store_id: ", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" "},
    {name: "Papa",layer: 0 , ingredients_all: [], type_measure: "gr", store_id: ", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" "},
    {name: "Gaseosa",layer: 0 , ingredients_all: [], type_measure: "un", store_id: ", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" "},
    {name: "Limonada",layer: 0 , ingredients_all: [], type_measure: "un", store_id: ", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" "},
    {name: "Te",layer: 0 , ingredients_all: [], type_measure: "un", store_id: ", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a" "},
    ]
*/

module.exports = async function() {
    setTimeout(async () => {
        await Ingredient.bulkCreate(FAKE_INGREDEINTS);
      }, 220)

};