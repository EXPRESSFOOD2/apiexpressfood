const { Recipe, Ingredient } = require('../../db');

//* Adds store_id
const recipesGetController = async (store_id) => {
    const results = await Recipe.findAll({
      where: {store_id},
      paranoid: false,
      attributes: {exclude: ["createdAt", "updatedAt", "deletedAt"] },
      oreder: [["deletedAt", "DESC"]]
    })
    return results;
}
//* Adds store_id
const recipesGetByIdController = async (id, store_id) => {
    const result = await Recipe.findOne({
      where: {
        id: id,
        store_id,
      },
      include: { model: Ingredient },
      attributes: {exclude: ["createdAt", "updatedAt", "deletedAt"] },
      paranoid: false
    });
    return result;
  }

module.exports = {
    recipesGetController,
    recipesGetByIdController
 }