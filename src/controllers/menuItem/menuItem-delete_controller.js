const { MenuItem } = require("../../db");

const menuItemsDeleteController = async (id) => {
  try {
    
      await MenuItem.destroy({where: {id}});

  } catch (err) {
    return err.message;
  }
};

module.exports = { menuItemsDeleteController };
