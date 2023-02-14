const { Recipe, Ingredient, IngredientsRecipes } = require('../db');

const postRecipe = async (name, details, produced_amount, type_measure, ingredArray) => {
    let newRecipe = await Recipe.create({name, details, produced_amount})
    let layer = processLayer(ingredArray)
    const ingredients_all = JSON.stringify( await createIngredientsRecipes({RecipeId: newRecipe.id, ingredArray}))
    Ingredient.create({name, layer, type_measure, ingredients_all})
    return newRecipe;
}
const createIngredientsRecipes = async ({RecipeId, ingredArray}) => {
    let retorno = [];
    const result = ingredArray.map( ing => {
        retorno.push({ingedient_id: ing.id, per_recipe: ing.per_recipe * ((100 + ing.waste_rate) / 100 )})
        return {RecipeId, IngredientId: ing.id, waste_rate: ing.waste_rate, per_recipe: ing.per_recipe}
    } )
    await IngredientsRecipes.bulkCreate(result)
    return retorno;
}

const processLayer = (ingredArray) => {
    let maxLayer = Number.MIN_SAFE_INTEGER;
    ingredArray.forEach(ingred => maxLayer = ingred.layer > maxLayer ? ingred.layer : maxLayer)
    return ++maxLayer;
}

module.exports = { postRecipe }