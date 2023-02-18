const { Recipe, Ingredient } = require('../../db');

const recipesGetController = async () => {
    const results = await Recipe.findAll({include: {
            model: Ingredient }})
    return results;
}
const recipesGetByIdController = async (id) => {
    const result = await Recipe.findByPk(id);
    return result;
  }

module.exports = {
    recipesGetController,
    recipesGetByIdController
 }