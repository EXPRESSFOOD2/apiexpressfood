const { MenuItem, Ingredient } = require("../../db");

const menuItemsGetController = async () => {
  const result = await MenuItem.findAll({include: {
    model: Ingredient }});
  return result;
};
const menuItemsGetByIdController = async (id) => {
  const result = await MenuItem.findByPk(id);
  return result;
}

module.exports = {
  menuItemsGetController,
  menuItemsGetByIdController
 };
