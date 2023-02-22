const { MenuItem, Ingredient, Tag } = require("../../db");

const menuItemsGetController = async () => {
  const result = await MenuItem.findAll({include: [
    { model: Ingredient },
    { model: Tag }
  ]});
  return result;
};
const menuItemsGetRecommendedController = async () => {
  const result = await MenuItem.findAll({include: {
    model: Ingredient }, where:{recomend_first:true}});
  return result;
};
const menuItemsGetByIdController = async (id) => {
  const result = await MenuItem.findByPk(id, {include:{ model: Tag }});
  return result;
}

module.exports = {
  menuItemsGetController,
  menuItemsGetByIdController,
  menuItemsGetRecommendedController
 };
