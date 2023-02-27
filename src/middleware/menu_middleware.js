const { conn } = require("../db");
const { Ingredient, MenuItem } = conn.models;
const { menuItemsPostController } = require("../controllers/menuItem/menuItem-post_controller")
const { menuItemsGetController, menuItemsGetByIdController, menuItemsGetRecommendedController } = require("../controllers/menuItem/menuItem-get_controller")
const { menuItemsDeleteController } = require("../controllers/menuItem/menuItem-delete_controller")
const { menuItemsPatchController } = require("../controllers/menuItem/menuItem-patch_controler")
const { ERROR_NAME, INVALID_DECRIPTION, ERROR_PRICE, INVALID_STOCK, INVALID_ARRAY_CONTENT,
        INVALID_INGREDIENTS_ARRAY, ERROR_NOT_FOUND, INVALID_ID, DUPLICATED_MENU_NAME } = require("../models/utils/MenuItem-ErrorMSGs")
const { validateArraySameStore, isItAnExistingModelByID, isItAnExistingModelByName } = require("../controllers/Utils/aux_controller")
const { getStoreId } = require("../controllers/HashFunction/security")

const processMenuPost = async (req, res) => {
    try {
        //! TODO
        // Agregar Validacion por Header
        //! Modificar la funcion
        const store_id = getStoreId();
        //! agregar Validacion de que todos los IDs de ingredArray son del store_id
        //*
        const { name,description,price,recomend_first,stock,is_active,url_image, ingredArray } = req.body;
        validateMenuItem(name, description, price, recomend_first, stock, is_active, url_image,ingredArray, store_id )
        const result = await menuItemsPostController(name, description, price, recomend_first, stock, is_active, url_image, ingredArray, store_id )
        return res.status(200).json( result )
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

const validateMenuItem = async ( name,description,price,recomend_first,stock,is_active, url_image, ingredArray, store_id ) => {
    if ( !name || !name.trim().length ) throw Error(ERROR_NAME);
    /*if ( isItAnExistingModelByName(name, store_id, MenuItem) ) throw Error(`${DUPLICATED_MENU_NAME}${name}`);;*/
    if ( !description || !description.trim().length) throw Error(INVALID_DECRIPTION);
    //if ( !isNaN(parseInt(price)) ) throw Error(ERROR_PRICE.PRICE_IS_STRING)
    if ( price <= 0) throw Error(ERROR_PRICE.ERROR_PRICE_LESS_0)
    if ( stock < 0 ) throw Error(INVALID_STOCK)
    if ( !ingredArray.length ) throw Error(INVALID_INGREDIENTS_ARRAY)
    if ( !await validateArraySameStore(ingredArray, store_id, Ingredient )) throw Error(INVALID_ARRAY_CONTENT)
}

const processMenuPatch = async (req, res) => {
    try {
        //! TODO
        // Agregar Validacion por Header
        //! Modificar la funcion
        const store_id = getStoreId();
        //! agregar Validacion de que todos los IDs de ingredArray son del store_id
        //*
        const { id, name, description, price, recomend_first, stock, is_active, url_image } = req.body;

        if ( !(await isItAnExistingModelByID(id, store_id)) ) throw Error(ERROR_NOT_FOUND)

        const result = await menuItemsPatchController(id, name, description, price, recomend_first, stock, is_active, url_image, store_id);
        return res.status(200).json( result )
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

const processMenuGetById = async (req, res) => {
    try {
        //! TODO
        // Agregar Validacion por Header
        //! Modificar la funcion
        const store_id = getStoreId();
        //! agregar Validacion de que todos los IDs de ingredArray son del store_id
        //*
        const { id } = req.params;
        if ( isNaN(id) || id < 1) throw Error(INVALID_ID)
        const result = await menuItemsGetByIdController(id, store_id)
        if ( !result ) throw Error(ERROR_NOT_FOUND)
        return res.status(200).json( result )
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

const processMenuGet = async (req, res) => {
    try {
        //! TODO
        // Agregar Validacion por Header
        //! Modificar la funcion
        const store_id = getStoreId();
        //! agregar Validacion de que todos los IDs de ingredArray son del store_id
        //*
        const result = await menuItemsGetController(store_id);
        return res.status(200).json( result )
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}
const processMenuGetRecommended = async (req, res) => {
    try {
        //! TODO
        // Agregar Validacion por Header
        //! Modificar la funcion
        const store_id = getStoreId();
        //! agregar Validacion de que todos los IDs de ingredArray son del store_id
        //*
        const result = await menuItemsGetRecommendedController(store_id);
        return res.status(200).json( result )
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

const processMenuDelete = async (req, res) => {
    try {
        //! TODO
        // Agregar Validacion por Header
        //! Modificar la funcion
        const store_id = getStoreId();
        //! agregar Validacion de que todos los IDs de ingredArray son del store_id
        //*
        const { id } = req.query;
        if ( id < 1) throw Error(INVALID_ID);
        const result = await menuItemsDeleteController( id, store_id );
        //if ( result ) await Ingredient.destroy({where: {id}})
        //if (result != 1) throw Error(INVALID_ID)
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
    processMenuPost,
    processMenuGetRecommended
}
