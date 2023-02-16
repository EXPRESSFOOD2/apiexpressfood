const { Ingredient } = require('../db');

const FAKE_INGREDEINTS = [
    {name: "Agua",layer: 0 , type_measure: "ml"},
    {name: "Harina",layer: 0 , type_measure: "gr"},
    {name: "Huevo",layer: 0 , type_measure: "un"},
    {name: "Azucar",layer: 0 , type_measure: "gr"},
    {name: "Sal", layer: 0 , type_measure: "gr"},

    {name: "Carne",layer: 0 , type_measure: "gr"},
    {name: "Cebolla",layer: 0 , type_measure: "gr"},
    {name: "Tomate",layer: 0 , type_measure: "gr"},
    {name: "Lechuga",layer: 0 , type_measure: "gr"},
    {name: "Pimienta",layer: 0 , type_measure: "gr"},

    {name: "Queso Mozzarella",layer: 0 , type_measure: "gr"},
    {name: "Carne Molida",layer: 0 , type_measure: "gr"},
    {name: "Pan Hamburguesa",layer: 0 , type_measure: "un"},
    {name: "Ketchup",layer: 0 , type_measure: "gr"},
    {name: "Mayonesa",layer: 0 , type_measure: "gr"},

    {name: "Levadura Fresca",layer: 0 , type_measure: "gr"},
    {name: "Aceite de Oliva",layer: 0 , type_measure: "ml"},
    {name: "Queso Cheddar",layer: 0 , type_measure: "gr"},
    {name: "Papa",layer: 0 , type_measure: "gr"},
    {name: "Gaseosa",layer: 0 , type_measure: "un"},
    
    {name: "Limonada",layer: 0 , type_measure: "un"},
    {name: "Te",layer: 0 , type_measure: "un"},
    ]

module.exports = function() {
    Ingredient.bulkCreate(FAKE_INGREDEINTS);
};