const { Recipe, Ingredient, IngredientsRecipes } = require('../db');
/*

*/
const FAKE_RECIPEL2 = [
    {   name: "Hamburguesa del Chef",
        details: "Hamburguesa especial",
        produced_amount: 1,
        type_measure: "un" },
    ]

module.exports = async function() {
    await Recipe.create({   name: "Hamburguesa del Chef",
    details: `
    Paso 1 :
Colocar los panes de forma horizontal, agregando las salsas a cada cara del pan
    Paso 2 :
   Añadir lechuga, tomate y cebolla al pan base de la hamburguesa
    Paso 3 :
    Agregar la carne
    Paso 4 :
Añandir 1 rebanada de queso cheddar, lechuga, tomate, cebolla y tocino.
    Paso 5 :
Añadir la otra cara del pan para envolver todo el contenido.`,
    produced_amount: 1,
    type_measure: "un" });
    await Ingredient.create({name: "Hamburguesa del Chef", layer: 2, type_measure: "un", ingredients_all: JSON.stringify([
    {id: 13, name: "Pan Hamburguesa", amount: 1},
    {id: 21, name: "Medallon de Carne 120gr", amount: 120},
    {id: 14, name: "Ketchup", amount: 0.3364},
    {id: 15, name: "Mayonesa", amount: 0.0186},
    {id: 8, name: "Tomate", amount: 0.0186},
    {id: 7, name: "Cebolla", amount: 0.0186},
    {id: 9, name: "Lechuga", amount: 0.0186},
    {id: 18, name: "Queso Cheddar", amount: 0.0373}])})
    await Recipe.create({   name: "Papas Fritas",
    details: "Metele sazon batria y reggaeton, que lo demas lo pone calderon",
    produced_amount: 1,
    type_measure: "un" })
    await Ingredient.create({name: "Papas Fritas", layer: 2, type_measure: "un", ingredients_all: JSON.stringify([
        {id: 19, name: "Papa", amount: 100},
        {id: 17, name: "Aceite de Oliva", amount: 0.6},
        {id: 5, name: "Sal", amount: 0.02},
        
    ])})


    await IngredientsRecipes.bulkCreate([
        {RecipeId: 3, IngredientId: 13, waste_rate: 0},
        {RecipeId: 3, IngredientId: 21, waste_rate: 0},
        {RecipeId: 3, IngredientId: 14, waste_rate: 0},
        {RecipeId: 3, IngredientId: 15, waste_rate: 0},
        {RecipeId: 3, IngredientId: 8, waste_rate: 0},
        {RecipeId: 3, IngredientId: 7, waste_rate: 0},
        {RecipeId: 3, IngredientId: 9, waste_rate: 0},
        {RecipeId: 3, IngredientId: 18, waste_rate: 0},
        
        {RecipeId: 4, IngredientId: 19, waste_rate: 0},
        {RecipeId: 4, IngredientId: 17, waste_rate: 10},
        {RecipeId: 4, IngredientId: 5, waste_rate: 0},
      
    ])
};