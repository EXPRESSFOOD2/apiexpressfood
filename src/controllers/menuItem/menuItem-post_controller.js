const { MenuItem, IngredientsMenuItems } = require("../../db");
const { ERROR_CANT_CREATE } = require("../../models/utils/MenuItem-ErrorMSGs")

const menuItemsPostController = async (name, description, price, recomend_first, stock, is_active, url_image, ingredArray, store_id ) => {
  const result = await MenuItem.create({name,description,price,recomend_first,stock,is_active, url_image, store_id});
  //! Este if Parece Opcional
  if ( !result ) throw Error(ERROR_CANT_CREATE)
  Promise.all( ingredArray.map( ingred => {
    IngredientsMenuItems.create({MenuItemId: result.id, IngredientId: ingred.id, quantity: ingred.quantity})
  }))
  return result;
};

module.exports = {
  menuItemsPostController
};