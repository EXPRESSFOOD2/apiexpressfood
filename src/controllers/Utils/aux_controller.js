const { Recipe } = require("../../db");

const isItAnExistingModelByID = async (id, store_id, model ) => {
    let result = await model.findAll({where: {id, store_id}})
    return result && result.length ? true : false;
}
const isItAnExistingModelByName = async (name, store_id, model ) => {
    let result = await model.findOne({where: {name, store_id}})
    return result && result.length ? true : false;
}

const getRecipeBasicAttrsById = async (id, store_id) => {
    const recipe = await Recipe.findOne({where: {id, store_id}});
    return {id: recipe.id, name: recipe.name,  details: recipe.details, type_measure: recipe.type_measure};
}

const getActualDate = () => {
    const actualDate = new Date().toISOString().split('T')[0];
    return ` (${actualDate})`
}

const generateOldName = (name) => {
    let result = `${name} OLD `;
    const length = 5;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}
const validateArraySameStore = async (arr, store_id, model) => {
    const result = await Promise.all(arr.map( async elem => {
        let resu = await model.findOne({where: {id: elem.id,  store_id}})
        return resu instanceof model;
    }))
    //console.log("Arrays: ");
    //let filtered = result.filter((elem => !elem instanceof model))
    //console.log(result);
    //
    return result.filter(e => e != true).length ? false : true;
}

module.exports = {
    isItAnExistingModelByName,
    isItAnExistingModelByID,
    getRecipeBasicAttrsById,
    getActualDate,
    generateOldName,
    validateArraySameStore,
};