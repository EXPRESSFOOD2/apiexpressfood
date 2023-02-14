const { Recipe, Ingredient, IngredientsRecipes } = require('../../db');

const recipesPostController = async (name, details, produced_amount, type_measure, ingredArray) => {
    // RECIPE name, details, produced_amount,
    const newRecipe = await Recipe.create({name, details, produced_amount})

    // INGREDIENT name, layer,  type_measure, ingredients_all
    await createIngredient({RecipeId: newRecipe.id, ingredArray, name});

    return newRecipe;
}
const createIngredient = async ({RecipeId, ingredArray, name}) => {
    const layer = processLayer(ingredArray)
    const ingredients_all =  JSON.stringify( await buildIngredientsAll({ RecipeId, ingredArray }))

    Ingredient.create({name, layer, type_measure, ingredients_all})
}

const buildIngredientsAll = async ({RecipeId, ingredArray}) => {
    let retorno = [];
    const result = ingredArray.map(async (ing) => {
        if(ing.layer == 0) {
            let withWasteRate = ing.per_recipe * ((100 + ing.waste_rate) / 100 )
            retorno.push({id: ing.id, name: ing.name, amount: withWasteRate})
        }
        else {
            const getIngredient = await Ingredient.findByPk(ing.id);
            const list = JSON.parse(getIngredient.ingredients_all);
            console.log(list)
            list.map( elem => {
                let withWasteRateAux = elem.amount * ing.per_recipe * ((100 + ing.waste_rate) / 100 )
                retorno.push({id: elem.id, name: elem.name, layer: elem.layer, amount: withWasteRateAux})
            })
        }
        return {RecipeId, IngredientId: ing.id, waste_rate: ing.waste_rate}
    } )
    await IngredientsRecipes.bulkCreate(result)
    return retorno;
}

const processLayer = (ingredArray) => {
    let maxLayer = Number.MIN_SAFE_INTEGER;
    ingredArray.forEach(ingred => maxLayer = ingred.layer > maxLayer ? ingred.layer : maxLayer)
    return ++maxLayer;
}
        
module.exports = {
    recipesPostController,
 }