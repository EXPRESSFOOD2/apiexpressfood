const { conn } = require("../db");
const { Ingredient, Recipe } = conn.models;
const { INVALID_RECIPE_NAME, DUPLICATED_RECIPE_NAME,INVALID_PRODUCED_AMOUNT, MIN_PROD_AMOUNT,
        INVALID_INGREDIENTS_ARRAY, INVALID_DATA_TYPE_ID, INVALID_RECIPE_DETAIL, INVALID_TYPE_MEASURE,
        INVALID_ID, } = require("../models/utils/Recipe-ErrorMSGs")
const { MEASURES_SHORT } = require("../models/utils/constants")
const { recipesPostController } = require("../controllers/recipe/recipe-post_controller")
const { recipesGetController, recipesGetByIdController } = require("../controllers/recipe/recipe-get_controller")
const { recipesDeleteController } = require("../controllers/recipe/recipe-delete_controller")
const { recipesPatchController } = require("../controllers/recipe/recipe-patch_controller")

const processRecipePost = async (req,res) => {
    const { name, details, produced_amount, type_measure, ingredArray } = req.body;
    try {
        await validateRecipePost(name, details, produced_amount, type_measure, ingredArray)

        const result = await recipesPostController(name, details, produced_amount, type_measure, ingredArray)
        return res.status(200).json( result )
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

const processRecipePatch = async (req,res) => {
    const {id, name, details } = req.body;
    try {
        if ( !(await Recipe.findByPk(id)) ) throw Error(INVALID_ID)
        const result = await recipesPatchController(id, name, details);
        return res.status(200).json( result )
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

const processRecipeGet = async (req,res) => {
    try {
        const result = await recipesGetController();
        return res.status(200).json( result )
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

const processRecipeGetById = async (req,res) => {
    const { id } = req.params;
    try {
        if ( isNaN(id) || id < 1) throw Error(INVALID_ID)
        const result = await recipesGetByIdController(id)
        if ( !result ) throw Error(INVALID_ID)
        return res.status(200).json( result )
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

const recipeNameExistInIngerients = async (name) => {
    let result = await Ingredient.findAll({where: {name}})
    return result.length ? true : false;
}

const recipeNameExistInRecipes = async (name) => {
    let result = await Recipe.findAll({where: {name}})
    return result.length ? true : false;
}

const validateRecipePost = async (name, details, produced_amount, type_measure, ingredArray ) => {
    let result = true;
    /* TODO */
    /* Validar Injeccion SQL */
    if (!name.trim() || typeof name != "string") throw Error(INVALID_RECIPE_NAME);
    if ( await recipeNameExistInIngerients(name) ) throw Error(DUPLICATED_RECIPE_NAME);
    if ( await recipeNameExistInRecipes(name) ) throw Error(DUPLICATED_RECIPE_NAME);
    if (produced_amount < MIN_PROD_AMOUNT) throw Error(INVALID_PRODUCED_AMOUNT);
    if (!ingredArray.length) throw Error(INVALID_INGREDIENTS_ARRAY)
    if ( !MEASURES_SHORT.includes(type_measure) ) throw Error(INVALID_TYPE_MEASURE)
    return result;
}
const processRecipeDelete = async (req,res) => {
    const { id } = req.query;
    try {
        if ( id < 1) throw Error(INVALID_ID)
        const result = await recipesDeleteController( id );
        if ( result ) await Ingredient.destroy({where: {id}})
        else throw Error(INVALID_ID)
        return res.status(200).json( result )
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}
module.exports = {
    processRecipePost,
    processRecipeGet,
    processRecipeGetById,
    processRecipeDelete,
    processRecipePatch

}