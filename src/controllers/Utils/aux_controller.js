
const { Ingredient, Recipe } = require("../../db");

const isItAnExistingIngredient = async (name, store_id) => {
    let result = await Ingredient.findOne({where: {name, store_id}})
    return result && result.length ? true : false;
}

const isItAnExistingRecipe = async (name, store_id) => {
    let result = await Recipe.findOne({where: {name, store_id}})
    return  result && result.length ? true : false;
}

const isItAnExistingIngredientByID = async (id, store_id) => {
    let result = await Ingredient.findOne({where: {id, store_id}})
    return result && result.length ? true : false;
}

const isItAnExistingRecipeByID = async (id, store_id) => {
    let result = await Recipe.findAll({where: {id, store_id}});
    return  result && result.length ? true : false;
}

const getRecipeBasicAttrsById = async (id, store_id) => {
    const recipe = await Recipe.findOne({where: {id, store_id}});
    return {id: recipe.id, name: recipe.name,  details: recipe.details, type_measure: recipe.type_measure};
}

const getActualDate = () => {
    const actualDate = new Date().toISOString().split('T')[0];
    return ` (${actualDate})`
}

const generateOldName = (name) => {
    let result = `${name} OLD `;
    const length = 5;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

module.exports = {
    isItAnExistingIngredient,
    isItAnExistingRecipe,
    isItAnExistingRecipeByID,
    isItAnExistingIngredientByID,
    getRecipeBasicAttrsById,
    getActualDate,
    generateOldName,

};