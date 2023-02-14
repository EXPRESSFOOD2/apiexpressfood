const { Ingredient } = require("../../db");

const postIngredient = async (ingredients) => {
  try {
    const existingIngredients = await Ingredient.findAll({
      where: {
        name: ingredients.map((ingredient) => ingredient.name),
      },
    });

    const existingIngredientNames = existingIngredients.map((ingredient) => ingredient.name);
    const newIngredients = ingredients.filter((ingredient) => {
      return !existingIngredientNames.includes(ingredient.name);
    });
    const oldIngredients = ingredients.filter((ingredient) => {
      return existingIngredientNames.includes(ingredient.name);
    });
  
    if (newIngredients.length) {
     const result =  await Ingredient.bulkCreate(newIngredients);
     
     return [...result, ...oldIngredients]
    }else{
      return existingIngredients
    }
  } catch (error) {
    return error.message;
  }
};

module.exports = { postIngredient };
