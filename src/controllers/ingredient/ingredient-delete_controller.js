const { Ingredient } = require("../../db");
const { generateOldName } = require("../Utils/aux_controller")

const ingredientsDeleteController = async (ingredientsIds) => {
  //! Rehacer, creo
  try {
      await Ingredient.update({is_active: false},{where: {id: ingredientsIds.map((ingredient)=>ingredient.id)}});
return "ingredients deleted successfully"
  } catch (error) {
    return error.message;
  }
};

//* recipe_delete_controller.js
//* 
const ingredientsDeleteController2 = async(id, store_id) => {
  //! bind con .then() para manejar Success y Error
  const ingredient = await Ingredient.findOne({where: {id, store_id}, paranoid: false})
  const simpleName = ingredient.name;
  //const label = ingredient.label;
  let oldName;
  do{
    oldName = generateOldName(simpleName);
  }while (await Ingredient.findOne({where: {name: oldName, store_id}, paranoid: false}))
  //console.log( await Ingredient.findOne({where: {name: "Agua", store_id}}));
  //! Queda recorrer por todos los ingredientes del store id cambiando el nombre
  await Ingredient.update({name: oldName}, {where: {id, store_id}})
  return await Ingredient.destroy({where: {id, store_id}});
  
}

module.exports = { ingredientsDeleteController, ingredientsDeleteController2 };
