const { MenuItem } = require("../../db");

const menuItemsDeleteController = async (id) => {
  try {
    
      await MenuItem.destroy({where: {id}});

  } catch (error) {
    return error.message;
  }
};

module.exports = { menuItemsDeleteController };
