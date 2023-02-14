const { Ingredient } = require("../../db");

const getIngredients = async () => {
  try {
    const responseDb = await Ingredient.findAll();
    if (responseDb.length) {
      return responseDb;
    } else {
      
      return false;
    }
  } catch (error) { 
    return error.message
  }
};

module.exports = { getIngredients };
