const { Ingredient } = require('../db');

const FAKE_INGREDEINTS = [
    {name: "Agua",layer: 0, ingredients_all: [], type_measure: "ml", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a"},
    {name: "Harina",layer: 0 , ingredients_all: [], type_measure: "gr", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a"},
    {name: "Huevo",layer: 0 , ingredients_all: [], type_measure: "un", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a"},
    {name: "Azucar",layer: 0 , ingredients_all: [], type_measure: "gr", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a"},
    {name: "Sal", layer: 0 , ingredients_all: [], type_measure: "gr", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a"},
    {name: "Carne",layer: 0 , ingredients_all: [], type_measure: "gr", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a"},
    {name: "Cebolla",layer: 0 , ingredients_all: [], type_measure: "gr", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a"},
    {name: "Tomate",layer: 0 , ingredients_all: [], type_measure: "gr", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a"},
    {name: "Lechuga",layer: 0 , ingredients_all: [], type_measure: "gr", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a"},
    {name: "Pimienta",layer: 0 , ingredients_all: [], type_measure: "gr", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a"},
    {name: "Queso Mozzarella",layer: 0 , ingredients_all: [], type_measure: "gr", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a"},
    {name: "Carne Molida",layer: 0 , ingredients_all: [], type_measure: "gr", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a"},
    {name: "Pan Hamburguesa",layer: 0 , ingredients_all: [], type_measure: "un", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a"},
    {name: "Ketchup",layer: 0 , ingredients_all: [], type_measure: "gr", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a"},
    {name: "Mayonesa",layer: 0 , ingredients_all: [], type_measure: "gr", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a"},
    {name: "Levadura Fresca",layer: 0 , ingredients_all: [], type_measure: "gr", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a"},
    {name: "Aceite de Oliva",layer: 0 , ingredients_all: [], type_measure: "ml", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a"},
    {name: "Queso Cheddar",layer: 0 , ingredients_all: [], type_measure: "gr", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a"},
    {name: "Papa",layer: 0 , ingredients_all: [], type_measure: "gr", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a"},
    {name: "Gaseosa",layer: 0 , ingredients_all: [], type_measure: "un", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a"},
    {name: "Limonada",layer: 0 , ingredients_all: [], type_measure: "un", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a"},
    {name: "Te",layer: 0 , ingredients_all: [], type_measure: "un", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a"},

    ]

module.exports = async function() {
    setTimeout(async () => {
        await Ingredient.bulkCreate(FAKE_INGREDEINTS);
      }, 220)
    
};