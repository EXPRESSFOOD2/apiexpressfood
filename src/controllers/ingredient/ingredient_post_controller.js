const { Ingredient } = require("../../db");

const postIngredient = async (name, type_measure) => {
  try {
    const responseDb = await Ingredient.findAll({ where: { name: name } });
    if (responseDb.length) {
      return false;
    } else {
      await Ingredient.create({
        name: name,
        type_measure: type_measure,
      });
      return true;
    }
  } catch (error) {
    return error.message
  }
};

module.exports = { postIngredient };
