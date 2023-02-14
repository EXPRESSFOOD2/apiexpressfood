const { Recipe, Ingredient } = require('../db');

const getAllRecipes = async () => {
    const results = await Recipe.findAll({include: {
            model: Ingredient }})
    return results;
}

module.exports = { getAllRecipes }