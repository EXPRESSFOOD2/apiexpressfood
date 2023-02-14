const { Ingredient } = require("../../db");

const ingredientsPostController = async (name, layer ,type_measure, ingredients_all ) => {
  const result = await Ingredient.create({name, layer ,type_measure, ingredients_all});
  return result;
};

module.exports = {
  ingredientsPostController
};
