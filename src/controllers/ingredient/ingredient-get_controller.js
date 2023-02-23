const { Ingredient } = require("../../db");

const ingredientsGetController = async (store_id) => {
  const result = await Ingredient.findAll(store_id);
  return result;
};
const ingredientsGetByIdController = async (id, store_id) => {
  const result = await Ingredient.findOne({where: {id, store_id}});
  return result;
}

module.exports = {
  ingredientsGetController,
  ingredientsGetByIdController
 };
