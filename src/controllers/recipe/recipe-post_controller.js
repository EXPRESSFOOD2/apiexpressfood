const { Recipe, Ingredient, IngredientsRecipes } = require('../../db');

const recipesPostController = async (name, details, produced_amount, type_measure, ingredArray) => {
    // RECIPE name, details, produced_amount,
    const newRecipe = await Recipe.create({name, details, produced_amount})

    // INGREDIENT name, layer,  type_measure, ingredients_all
    await createIngredient({RecipeId: newRecipe.id, ingredArray, name, type_measure});

    return newRecipe;
}
const createIngredient = async ({RecipeId, ingredArray, name, type_measure}) => {
    const layer = processLayer(ingredArray)
    const ingredients_all =  await buildIngredientsAll({ RecipeId, ingredArray })
    //! TODO Sacar.. TEST
    //console.log(ingredients_all);
    Ingredient.create({name, layer, type_measure, ingredients_all})
}

const buildIngredientsAll = async ({RecipeId, ingredArray}) => {
    let retorno = [];
    let result = [];
    for (let i = 0; i < ingredArray.length; i++) {
        let ing = ingredArray[i];
        if (ing.layer == 0){
            let withWasteRate = ing.per_recipe * ((100 + ing.waste_rate) / 100 )
            retorno.push({id: ing.id, name: ing.name, amount: withWasteRate})
        }else {
            const getIngredient = await Ingredient.findByPk(ing.id);
            let list = JSON.parse(getIngredient.ingredients_all);
            await Promise.all(list.map(elem => {
                let withWasteRateAux = elem.amount * ing.per_recipe * ((100 + ing.waste_rate) / 100 )
                retorno.push({id: elem.id, name: elem.name, layer: elem.layer, amount: withWasteRateAux})
            }))
        }
        result.push({RecipeId, IngredientId: ing.id, waste_rate: ing.waste_rate});
    }

    IngredientsRecipes.bulkCreate(result)

    return await retorno;
}

const processLayer = (ingredArray) => {
    let maxLayer = Number.MIN_SAFE_INTEGER;
    ingredArray.forEach(ingred => maxLayer = ingred.layer > maxLayer ? ingred.layer : maxLayer)
    return ++maxLayer;
}

module.exports = {
    recipesPostController,
 }