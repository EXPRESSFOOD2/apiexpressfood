const { Recipe, Ingredient, IngredientsRecipes } = require('../db');

const postRecipe = async (name, details, produced_amount, type_measure, ingredArray) => {
     //Ingredient.create({name: "Papa", layer: 0, type_measure: "gr"})
     //Ingredient.create({name: "Manteca purificada", layer: 1, type_measure: "gr"})
    // Ingredient.create({name: "Papa Negra", layer: 0, type_measure: "gr"})
    // Ingredient.create({name: "Manteca purificada plus", layer: 1, type_measure: "gr"})
                                                             
    let newRecipe = await Recipe.create({name, details, produced_amount})
    let layer = processLayer(ingredArray)
    createIngredientsRecipes({RecipeId: newRecipe.id, ingredArray})
    Ingredient.create({name, layer, type_measure})
    return newRecipe;
}
const createIngredientsRecipes = async ({RecipeId, ingredArray}) => {
    const result = ingredArray.map( ing => {
        return {RecipeId, IngredientId: ing.id, waste_rate: ing.waste_rate, per_recipe: ing.per_recipe}
    } )
    IngredientsRecipes.bulkCreate(result)
}

const processLayer = (ingredArray) => {
    let maxLayer = Number.MIN_SAFE_INTEGER;
    ingredArray.forEach(ingred => maxLayer = ingred.layer > maxLayer ? ingred.layer : maxLayer)
    return ++maxLayer;
}

module.exports = { postRecipe }