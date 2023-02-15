const { Recipe, Ingredient, IngredientsRecipes } = require('../db');
/*

*/

module.exports = async function() {
    await Recipe.create({   name: "Combo para ti solito",
    details: `
   Deliciosa Hamburguesa del chef bob esponja, acompañada de papas fritas
   calamardo, y gaseosa`,
    produced_amount: 1,
    type_measure: "un" });
    await Ingredient.create({name: "Combo para ti solito", layer: 3, type_measure: "un", ingredients_all: JSON.stringify([
        {id: 13, name: "Pan Hamburguesa", amount: 1},
    
        {id: 12, name: "Carne Molida", layer:0, amount: 80},
        {id: 3, name: "Huevo", layer:0, amount: 0.6},
        {id: 7, name: "Cebolla", layer:0, amount: 26},
        {id: 5, name: "Sal", layer:0, amount: 0.4},
        {id: 10, name: "Pimienta", layer:0, amount: 0.6},

        {id: 14, name: "Ketchup", layer:0, amount: 20},
        {id: 15, name: "Mayonesa", layer:0,  amount: 20},
        {id: 8, name: "Tomate", layer:0, amount: 60},
    
        {id: 9, name: "Lechuga", layer:0, amount: 50},
        {id: 18, name: "Queso Cheddar", layer:0, amount: 70},
        {id: 19, name: "Papa", layer:0, amount: 100},
        {id: 17, name: "Aceite de Oliva", layer:0, amount: 0.6},
        {id: 20, name: "Gaseosa", layer:0, amount: 1},
      ])})
    await Recipe.create({   name: "Pizza de queso familiar",
    details: "Deliciosa Pizza Tamaño familiar, con queso mozzarella, tomate y cebolla",
    produced_amount: 1,
    type_measure: "un" })
    await Ingredient.create({name: "Pizza de queso familiar", layer: 2, type_measure: "un", ingredients_all: JSON.stringify([
        {id: 2, name: "Harina", amount: 0.5128},
    {id: 16, name: "Levadura Fresca", layer:0,  amount: 0.0467},
    {id: 1, name: "Agua", layer:0, amount: 0.3364},
    {id: 5, name: "Sal",layer:0, amount: 0.0186},
    {id: 17, name: "Aceite de Oliva",layer:0, amount: 0.0373},
    {id: 11, name: "Queso Mozzarella",layer:0, amount: 500},
    {id: 8, name: "Tomate", layer:0, amount: 200},
    {id: 7, name: "Cebolla",layer:0, amount: 300},
        
    ])})


    await IngredientsRecipes.bulkCreate([
        {RecipeId: 5, IngredientId: 13, waste_rate: 0},
        {RecipeId: 5, IngredientId: 12, waste_rate: 0},
        {RecipeId: 5, IngredientId: 3, waste_rate: 0},
        {RecipeId: 5, IngredientId: 7, waste_rate: 0},
        {RecipeId: 5, IngredientId: 5, waste_rate: 0},
        {RecipeId: 5, IngredientId: 10, waste_rate: 0},
        {RecipeId: 5, IngredientId: 14, waste_rate: 0},
        {RecipeId: 5, IngredientId: 15, waste_rate: 0},
        {RecipeId: 5, IngredientId: 8, waste_rate: 0},
        {RecipeId: 5, IngredientId: 9, waste_rate: 0},
        {RecipeId: 5, IngredientId: 18, waste_rate: 0},
        {RecipeId: 5, IngredientId: 19, waste_rate: 0},
        {RecipeId: 5, IngredientId: 17, waste_rate: 0},
        {RecipeId: 5, IngredientId: 20, waste_rate: 0},
        
        {RecipeId: 6, IngredientId: 2, waste_rate: 0},
        {RecipeId: 6, IngredientId: 16, waste_rate: 0},
        {RecipeId: 6, IngredientId: 1, waste_rate: 0},
        {RecipeId: 6, IngredientId: 5, waste_rate: 0},
        {RecipeId: 6, IngredientId: 17, waste_rate: 0},
        {RecipeId: 6, IngredientId: 11, waste_rate: 0},
        {RecipeId: 6, IngredientId: 8, waste_rate: 0},
        {RecipeId: 6, IngredientId: 7, waste_rate: 0},
      
    ])
};