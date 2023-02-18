const { Ingredient } = require("../../db");

const ingredientsPatchController = async (id, name, type_measure) => {
  const result = await Ingredient.update({ name, type_measure },
                                              { where: { id } });
  return result;
};

module.exports = {
  ingredientsPatchController
};
