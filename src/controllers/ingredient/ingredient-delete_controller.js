const { Ingredient } = require("../../db");

const ingredientsDeleteController = async (ingredientsIds) => {
  try {
    
      await Ingredient.update({is_active: false},{where: {id: ingredientsIds.map((ingredient)=>ingredient.id)}});
return "ingredients deleted successfully"
  } catch (error) {
    return error.message;
  }
};

module.exports = { ingredientsDeleteController };
