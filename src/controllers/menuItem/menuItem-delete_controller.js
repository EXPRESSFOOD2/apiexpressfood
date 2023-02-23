const { MenuItem, IngredientsMenuItem } = require("../../db");

const menuItemsDeleteController = async (id, store_id) => {
  //! Retrabajado
  const result = MenuItem.destroy({where: {id, store_id}})
  IngredientMenuItem.destroy({where: {MenuItemId: id }})
  return result;
  //*
  /*
  try {
    
      await MenuItem.destroy({where: {id}});

  } catch (err) {
    return err.message;
  }*/
};

module.exports = { menuItemsDeleteController };
