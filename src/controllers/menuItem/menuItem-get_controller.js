const { MenuItem, Ingredient, Tag } = require("../../db");

const menuItemsGetController = async (store_id) => {
  const result = await MenuItem.findAll({where: {store_id}, include: [
    { model: Ingredient },
    { model: Tag }
  ]});
  return result;
};
const menuItemsGetRecommendedController = async (store_id) => {
  const result = await MenuItem.findAll({include: [{
    model: Ingredient }, { model: Tag }], where:{recomend_first:true, store_id}});
  return result;
};
const menuItemsGetByIdController = async (id, store_id) => {
  const result = await MenuItem.findOne({where: {id, store_id}, include:{ model: Tag }});
  return result;
}

module.exports = {
  menuItemsGetController,
  menuItemsGetByIdController,
  menuItemsGetRecommendedController
 };
