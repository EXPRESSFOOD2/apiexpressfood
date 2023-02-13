const { Ingredient } = require("../../db");

const putIngredient = async (id, name, type_measure) => {
  try {
    const responseDb = await Ingredient.findByPk(id);
    if (Object.keys(responseDb).length) {
      await Ingredient.update(
        { name: name, type_measure: type_measure },
        { where: { id: id } }
      );
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return error.message;
  }
};

module.exports = { putIngredient };
