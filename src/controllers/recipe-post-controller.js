const { Recipe, Ingredient, IngredientsRecipes } = require('../db');

const postRecipe = async (name, details, produced_amount, type_measure, ingredArray) => {

    let newRecipe = await Recipe.create({name, details, produced_amount})
    let layer = processLayer(ingredArray)
    createIngredientsRecipes({RecipeId: newRecipe.id, ingredArray})
    Ingredient.create({name, layer, type_measure})
    return newRecipe;
}
const createIngredientsRecipes = async ({RecipeId, ingredArray}) => {
    const result = ingredArray.map( ing => {
        return {RecipeId, IngredientId: ing.id, waste_rate: ing.waste_rate}
    } )
    IngredientsRecipes.bulkCreate(result)
}

const processLayer = (ingredArray) => {
    let maxLayer = Number.MIN_SAFE_INTEGER;
    ingredArray.forEach(ingred => maxLayer = ingred.layer > maxLayer ? ingred.layer : maxLayer)
    return ++maxLayer;
}

module.exports = { postRecipe }