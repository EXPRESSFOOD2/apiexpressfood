const { Recipe, Ingredient, IngredientsRecipes } = require('../db');
/*

*/

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
    
    {id: 12, name: "Carne Molida", layer: 0, amount: 80},
    {id: 3, name: "Huevo", layer: 0, amount: 0.6},
    {id: 7, name: "Cebolla",layer:0, amount: 26},
    {id: 5, name: "Sal", layer:0,  amount: 0.2},
    {id: 10, name: "Pimienta", layer:0, amount: 0.6},
    {id: 2, name: "Harina", layer: 0, amount: 12.6}
    ,
    {id: 14, name: "Ketchup", layer:0, amount: 20},
    {id: 15, name: "Mayonesa", layer:0, amount: 20},
    {id: 8, name: "Tomate", amount: 60},

    {id: 9, name: "Lechuga", layer: 0, amount: 50},
    {id: 18, name: "Queso Cheddar", layer:0, amount: 70}])})
    await Recipe.create({   name: "Papas Fritas",
    details: "Metele sazon batria y reggaeton, que lo demas lo pone calderon",
    produced_amount: 1,
    type_measure: "un" })
    await Ingredient.create({name: "Papas Fritas", layer: 2, type_measure: "un", ingredients_all: JSON.stringify([
        {id: 19, name: "Papa", layer:0, amount: 100},
        {id: 17, name: "Aceite de Oliva", layer:0,  amount: 0.6},
        {id: 5, name: "Sal", layer: 0, amount: 0.02},
        
    ])})


    await IngredientsRecipes.bulkCreate([
        {RecipeId: 3, IngredientId: 13, waste_rate: 0},
        {RecipeId: 3, IngredientId: 12, waste_rate: 0},
        {RecipeId: 3, IngredientId: 3, waste_rate: 0},
        {RecipeId: 3, IngredientId: 7, waste_rate: 0},
        {RecipeId: 3, IngredientId: 5, waste_rate: 0},
        {RecipeId: 3, IngredientId: 10, waste_rate: 0},
        {RecipeId: 3, IngredientId:2, waste_rate: 0},
        {RecipeId: 3, IngredientId: 14, waste_rate: 0},
        {RecipeId: 3, IngredientId: 15, waste_rate: 0},
        {RecipeId: 3, IngredientId: 8, waste_rate: 0},
        {RecipeId: 3, IngredientId: 9, waste_rate: 0},
        {RecipeId: 3, IngredientId: 18, waste_rate: 0},
        
        {RecipeId: 4, IngredientId: 19, waste_rate: 0},
        {RecipeId: 4, IngredientId: 17, waste_rate: 10},
        {RecipeId: 4, IngredientId: 5, waste_rate: 0},
      
    ])
};