const { Ingredient, Recipe } = require("../db");
const { INVALID_INGREDIENT_NAME, NOT_A_NUMERIC, DUPLICATED_INGREDIENT_NAME,
        INVALID_ID, MUST_CONTAINS_AN_ARRAY, INVALID_MEASURE_TYPE,
        CANT_FIND_INGREDIENT, INVALID_ARRAY,LAYER_BIGGER_ZERO } = require("../models/utils/Ingredient-ErrorMSGs");
const { MEASURES_SHORT } = require("../models/utils/constants");
const { ingredientsPatchController } = require("../controllers/ingredient/ingredient-patch_controler");
const { ingredientsPostController } = require("../controllers/ingredient/ingredient-post_controller");
const { ingredientsGetByIdController, ingredientsGetController } = require("../controllers/ingredient/ingredient-get_controller");
const { ingredientsDeleteController2 } = require("../controllers/ingredient/ingredient-delete_controller")
const { getStoreId } = require("../controllers/HashFunction/security")
const { isItAnExistingModelByID, isItAnExistingModelByName } = require("../controllers/Utils/aux_controller")

const processIngredientPost = async (req, res) => {
  try {
    //! TODO
    //* const { storeName } = req.headers;
    //* const store_id = await getStoreIDByStoreName(storeName);
                                              
    // Agregar Validacion por Header
    //! Modificar la funcion
    const store_id = getStoreId();

    const { name, layer, type_measure, ingredients_all } = req.body;
    console.log("a ver a ver");    //*{"name": "Gaseosa Coca-Cola", "layer": 0, "type_measure": "un", "ingredients_all": [],  "store_id": "f3bc0474-620c-429d-a46c-df2460c7725a" }
    await validateIngredient(name, layer, type_measure, ingredients_all, store_id);
    console.log("Aca entra");
    const result = await ingredientsPostController( name, layer, type_measure, ingredients_all, store_id );
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const processIngredientDelete = async (req, res) => {
  try {
    //! TODO
    //* const { storeName } = req.headers;
    //* const store_id = await getStoreIDByStoreName(storeName);
                                              
    const store_id = getStoreId();
    //*
    const { id } = req.params;
    if (id < 1) throw Error(`${INVALID_ID}${id}`);
    if ( !await isItAnExistingModelByID(id, store_id, Ingredient) ) throw Error(`${INVALID_ID}${id}`)
    const result = await ingredientsDeleteController2(id, store_id);
    return res.status(200).json(result)
    /*
    const result = await ingredientsGetByIdController(id, store_id);
    if (result) {  await Ingredient.update({is_active:false}, {where:{id:id}})
    const result3 = await ingredientsGetByIdController(id, store_id);
    return res.status(200).json(result3)}
    else throw Error(CANT_FIND_INGREDIENT);
    */
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};


const processIngredientGet = async (req, res) => {
  try {
    //! TODO
    //* const { storeName } = req.headers;
    //* const store_id = await getStoreIDByStoreName(storeName);
                                              
    const store_id = getStoreId();
    //*
    const result = await ingredientsGetController(store_id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const processIngredientGetById = async (req, res) => {
  try {
    //! TODO
    //* const { storeName } = req.headers;
    //* const store_id = await getStoreIDByStoreName(storeName);
                                              
    const store_id = getStoreId();
    //*
    const { id } = req.params;
    if ( isNaN(id) || id < 1) throw Error(`${INVALID_ID}${id}`)
    const result = await ingredientsGetByIdController(id, store_id);
    if ( !result ) throw Error(`${INVALID_ID}${id}`)
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const processIngredientPatch = async (req, res) => {
  try {
    //! TODO
    //* const { storeName } = req.headers;
    //* const store_id = await getStoreIDByStoreName(storeName);
                                              
    //! Modificar la funcion
    const store_id = getStoreId();
    //*
    const { id, name, type_measure } = req.body;
    if (!await isItAnExistingModelByID(id, store_id, Ingredient)) throw Error(`${INVALID_ID}${id}`);
    const result = await ingredientsPatchController(id, name, type_measure, store_id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};


const validateIngredient = async ( name, layer, type_measure, ingredients_all, store_id ) => {
  if (await isItAnExistingModelByName(name, store_id, Ingredient )) throw Error(`${DUPLICATED_INGREDIENT_NAME} ${name}`);
  //if (await (name)) throw Error(DUPLICATED_RECIPE_NAME);
  if (!name.trim().length || !name) throw Error(INVALID_INGREDIENT_NAME);
  if (isNaN(layer)) throw Error(`${NOT_A_NUMERIC}${layer}`);
  if (layer < 0) throw Error(LAYER_BIGGER_ZERO);
  if (layer == 0 && ingredients_all.length != 0) throw Error(INVALID_ARRAY);
  if (layer > 0 && ingredients_all.length < 1) throw Error(MUST_CONTAINS_AN_ARRAY);
  if (!MEASURES_SHORT.includes(type_measure)) throw Error(`${type_measure}${INVALID_MEASURE_TYPE}`);
};

module.exports = {
  processIngredientPost,
  processIngredientPatch,
  processIngredientGet,
  processIngredientGetById,
  processIngredientDelete,
};
