const { conn } = require("../db");
const { Ingredient, MenuItem } = conn.models;
const { menuItemsPostController } = require("../controllers/menuItem/menuItem-post_controller")
const { menuItemsGetController, menuItemsGetByIdController } = require("../controllers/menuItem/menuItem-get_controller")
const { menuItemsDeleteController } = require("../controllers/menuItem/menuItem-delete_controller")
const { menuItemsPatchController } = require("../controllers/menuItem/menuItem-patch_controler")
const { ERROR_NAME, INVALID_DECRIPTION, ERROR_PRICE, INVALID_STOCK,
        INVALID_INGREDIENTS_ARRAY, ERROR_NOT_FOUND, INVALID_ID } = require("../models/utils/MenuItem-ErrorMSGs")

const processMenuPost = async (req, res) => {
    const { name,description,price,recomend_first,stock,is_active,url_image, ingredArray } = req.body;
    try {
        validateMenuItem(name, description, price, recomend_first, stock, is_active, url_image,ingredArray )
        const result = await menuItemsPostController(name, description, price, recomend_first, stock, is_active, url_image,ingredArray)
        return res.status(200).json( result )
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

const validateMenuItem = ( name,description,price,recomend_first,stock,is_active, url_image, ingredArray ) => {
    if ( !name || !name.trim().length ) throw Error(ERROR_NAME);
    if ( !description || !description.trim().length) throw Error(INVALID_DECRIPTION);
    //if ( !isNaN(parseInt(price)) ) throw Error(ERROR_PRICE.PRICE_IS_STRING)
    if ( price <= 0) throw Error(ERROR_PRICE.ERROR_PRICE_LESS_0)
    if ( stock < 0 ) throw Error(INVALID_STOCK)
    if ( !ingredArray.length ) throw Error(INVALID_INGREDIENTS_ARRAY)
}

const processMenuPatch = async (req, res) => {
    const { id, name, description, price, recomend_first, stock, is_active, url_image } = req.body;
    try {
        if ( !(await MenuItem.findByPk(id)) ) throw Error(ERROR_NOT_FOUND)
        const result = await menuItemsPatchController(id, name, description, price, recomend_first, stock, is_active, url_image);
        return res.status(200).json( result )
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

const processMenuGetById = async (req, res) => {
    const { id } = req.params;
    try {
        if ( isNaN(id) || id < 1) throw Error(INVALID_ID)
        const result = await menuItemsGetByIdController(id)
        return res.status(200).json( result )
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

const processMenuGet = async (req, res) => {
    try {
        const result = await menuItemsGetController();
        return res.status(200).json( result )
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

const processMenuDelete = async (req, res) => {
    const { id } = req.query;
    try {
        if ( id < 1) throw Error(INVALID_ID);
        const result = await ingredientsGetByIdController( id );
        if ( result ) await Ingredient.destroy({where: {id}})
        else throw Error(INVALID_ID)
        return res.status(200).json( result )
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

module.exports = {
    processMenuDelete,
    processMenuGet,
    processMenuGetById,
    processMenuPatch,
    processMenuPost
}