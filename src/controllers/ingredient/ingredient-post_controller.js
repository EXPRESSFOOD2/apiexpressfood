const { Ingredient } = require("../../db");

const ingredientsPostController = async (name, layer, type_measure, ingredients_all, store_id ) => {
  const result = await Ingredient.create({name, layer, type_measure, ingredients_all, store_id });
  return result;
};

module.exports = {
  ingredientsPostController
};
