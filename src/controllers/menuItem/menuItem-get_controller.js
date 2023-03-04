const { MenuItem, Ingredient, Tag, Review, Order} = require("../../db");

const menuItemsGetController = async (store_id) => {
  const result = await MenuItem.findAll({
    where: { store_id },
    include: [{ model: Tag, attributes: ["name"] }, { model: Ingredient }],
    attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
    order: [["recomend_first", "DESC"]],
  });

  return  filterMenuItems(result);

};

const menuItemsGetRecommendedController = async (store_id) => {
  const result = await MenuItem.findAll({
    include: [ { model: Ingredient, }, { model: Tag }, ],
    where: { recomend_first: true, store_id },
  });
  //! Se puede implementar
  // const tagsArray = result.dataValues.Tags.map((tag) => tag.name);

  // console.log(tagsArray);
  
  return filterMenuItems(result);
};

const filterMenuItems = (arr) => {
  const result = arr.map((item) => {
    const tagsArray = item.Tags.map((tag) => tag.name);
    return {
      id: item.id,
      name: item.name,
      description: item.description,
      price: item.price,
      recomend_first: item.recomend_first,
      stock: item.stock,
      is_active: item.is_active,
      url_image: item.url_image,
      //store_id: item.store_id,
      Tags: tagsArray,
      Ingredients: item.Ingredients,
    };
  });
  return result
}

const menuItemsGetByIdController = async (id, store_id) => {
  const result = await MenuItem.findOne({
    where: { id, store_id },
    include: [{ model: Tag }, { model: Ingredient }],
    //include: [{ model: Tag, attributes: ["name"] }, { model: Ingredient }],
  });
  //! Se puede implementar
  //result.Tags = await result.Tags.map((tag) => tag.name);

  return filterMenuItems([result]);
};

module.exports = {
  menuItemsGetController,
  menuItemsGetByIdController,
  menuItemsGetRecommendedController,
};
