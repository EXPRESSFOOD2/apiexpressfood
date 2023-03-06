const { MenuItem, IngredientsMenuItems } = require("../../db");
const { ERROR_CANT_CREATE } = require("../../models/utils/MenuItem-ErrorMSGs")
const { tagsApplyController } = require("../tag/tag-apply_controller")

const menuItemsPostController = async (name, description, price, recomend_first, stock, is_active, url_image, ingredArray, store_id, tagsIds ) => {
  const result = await MenuItem.create({name,description,price,recomend_first,stock,is_active, url_image, store_id});
  
  const menuItemId = result.dataValues.id
 
  await tagsApplyController(tagsIds, menuItemId, store_id)

  //! Este if Parece Opcional
  if ( !result ) throw Error(ERROR_CANT_CREATE)
  Promise.all( ingredArray.map( ingred => {
    IngredientsMenuItems.create({MenuItemId: result.id, IngredientId: ingred.id, quantity: ingred.quantity})
  }))
  delete result.dataValues.store_id
  delete result.dataValues.updatedAt
  delete result.dataValues.createdAt
  delete result.dataValues.deletedAt
  return result;
};

module.exports = {
  menuItemsPostController
};