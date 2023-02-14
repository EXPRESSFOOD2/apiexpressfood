const { Ingredient } = require("../../db");

const deleteIngredient = async (ingredientsIds) => {
  try {

      await Ingredient.destroy({where: {id: ingredientsIds.map((ingredient)=>ingredient.id)}});

  
  } catch (error) {
    return error.message;
  }
};

module.exports = { deleteIngredient };
