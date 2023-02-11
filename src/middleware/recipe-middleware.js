const { conn } = require("../db");
const { Ingredient } = conn.models;
const { INVALID_RECIPE_NAME, DUPLICATED_RECIPE_NAME,INVALID_PRODUCED_AMOUNT, MIN_PROD_AMOUNT,   INVALID_INGREDIENTS_ARRAY } = require("../models/utils/Recipe-ErrorMSGs")

const isRecipeNameAnExistingIngredientName = async (name) => {
    let result = await Ingredient.findAll({where: {name}})
    console.log(result)
    return result.length ? true : false;
}

const validateRecipePost = async (name, details, produced_amount, type_measure, ingredArray ) => {
    let result = true;
    /* TODO */
    /* Validar Injeccion SQL */
    if(!name.trim()) throw Error(INVALID_RECIPE_NAME);
    if( await isRecipeNameAnExistingIngredientName(name) ) throw Error(DUPLICATED_RECIPE_NAME);
    if(produced_amount < MIN_PROD_AMOUNT) throw Error(INVALID_PRODUCED_AMOUNT);
    if(!ingredArray.length) throw Error(INVALID_INGREDIENTS_ARRAY)
    return result;
}

module.exports = {
    validateRecipePost
}