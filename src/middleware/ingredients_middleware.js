const { conn, Op } = require("../db");
const { Ingredient, Recipe } = conn.models;
const {
  INVALID_INGREDIENT_NAME,
  NOT_A_NUMERIC,
  DUPLICATED_NAME,
  INVALID_ID,
  MUST_CONTAINS_AN_ARRAY,
  INVALID_MEASURE_TYPE,
  CANT_FIND_INGREDIENT,
  INVALID_ARRAY,
  LAYER_BIGGER_ZERO,
} = require("../models/utils/Ingredient-ErrorMSGs");
const { DUPLICATED_RECIPE_NAME } = require("../models/utils/Recipe-ErrorMSGs");
const { MEASURES_SHORT } = require("../models/utils/constants");
const {
  ingredientsPatchController,
} = require("../controllers/ingredient/ingredient-patch_controler");
const {
  ingredientsPostController,
} = require("../controllers/ingredient/ingredient-post_controller");
const {
  ingredientsGetByIdController,
  ingredientsGetController,
} = require("../controllers/ingredient/ingredient-get_controller");
const { where } = require("sequelize");

const processIngredientPost = async (req, res) => {
  //name,layer:,type_measure:,ingredients_all:
  const { name, layer, type_measure, ingredients_all } = req.body;
  try {
    await validateIngredient(name, layer, type_measure, ingredients_all);
    const result = await ingredientsPostController(
      name,
      layer,
      type_measure,
      ingredients_all
    );
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
const processIngredientDelete = async (req, res) => {
  const { id } = req.params;
  try {
    if (id < 1) throw Error(INVALID_ID);
    const result = await ingredientsGetByIdController(id);
    if (result){ const result2 = await Ingredient.update({is_active:false}, {where:{id:id}})
    
    const result3 = await ingredientsGetByIdController(id);
   return res.status(200).json(result3)}
    else throw Error(CANT_FIND_INGREDIENT);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const processIngredientGet = async (req, res) => {
  try {
    const result = await ingredientsGetController();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
const processIngredientGetById = async (req, res) => {
  const { id } = req.params;
  try {
    if (isNaN(id) || id < 1) throw Error(INVALID_ID);
    const result = await ingredientsGetByIdController(id);
    if (!result) throw Error(CANT_FIND_INGREDIENT);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const processIngredientPatch = async (req, res) => {
  const { id, name, type_measure } = req.body;
  try {
    if (!(await Ingredient.findByPk(id))) throw Error(CANT_FIND_INGREDIENT);
    const result = await ingredientsPatchController(id, name, type_measure);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const isExistingIngredient = async (name) => {
  let result = await Ingredient.findAll({ where: { name } });
  return result.length > 0 ? true : false;
};

const validateIngredient = async (
  name,
  layer,
  type_measure,
  ingredients_all
) => {
  if (await isExistingIngredient(name)) throw Error(DUPLICATED_NAME);
  if (await Recipe.findOne({ where: { name } }))
    throw Error(DUPLICATED_RECIPE_NAME);
  if (!name.trim().length || !name) throw Error(INVALID_INGREDIENT_NAME);
  if (isNaN(layer)) throw Error(NOT_A_NUMERIC);
  if (layer < 0) throw Error(LAYER_BIGGER_ZERO);
  if (layer == 0 && ingredients_all.length != 0) throw Error(INVALID_ARRAY);
  if (layer > 0 && ingredients_all.length < 1)
    throw Error(MUST_CONTAINS_AN_ARRAY);
  if (!MEASURES_SHORT.includes(type_measure)) throw Error(INVALID_MEASURE_TYPE);
};

module.exports = {
  processIngredientPost,
  processIngredientPatch,
  processIngredientGet,
  processIngredientGetById,
  processIngredientDelete,
};
