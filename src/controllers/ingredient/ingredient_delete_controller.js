const { Ingredient } = require("../../db");

const deleteIngredient = async (id) => {
  try {
    const responseDb = await Ingredient.findByPk(id);
    if (Object.values(responseDb.dataValues).length) {
      await Ingredient.destroy({where: {id: responseDb.dataValues.id}});
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return error.message;
  }
};

module.exports = { deleteIngredient };
