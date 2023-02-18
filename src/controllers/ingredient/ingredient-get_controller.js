const { Ingredient } = require("../../db");

const ingredientsGetController = async () => {
  const result = await Ingredient.findAll();
  return result;
};
const ingredientsGetByIdController = async (id) => {
  const result = await Ingredient.findByPk(id);
  return result;
}

module.exports = {
  ingredientsGetController,
  ingredientsGetByIdController
 };
