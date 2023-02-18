const { Recipe } = require("../../db");

const recipesPatchController = async (id, name, details) => {
  const result = await Recipe.update({ name, details },
                                              { where: { id } });
  return result;
};

module.exports = {
    recipesPatchController
};