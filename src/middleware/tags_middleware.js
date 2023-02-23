const { Tag, Recipe, Ingredient } = require("../db");
const { tagsPostController } = require("../controllers/tag/tag-post_controller")
const { tagsPatchController } = require("../controllers/tag/tag-patch_controller")
const { tagsGetController } = require("../controllers/tag/tag-get_controller")
const { isItAnExistingModelByID } = require("../controllers/Utils/aux_controller")
const { tagsDeleteController } = require("../controllers/tag/tag-delete_controller")
const { getStoreId } = require("../controllers/HashFunction/security");
const { INVALID_TAG_ID, DUPLICATED_TAG_NAME, INVALID_TAG_NAME } = require("../models/utils/Tag-ErrorMSGs") 

//* Adds storeId && Headers Validation note
const processTagPost = async (req,res) => {
try {
    //! TODO
    // Agregar Validacion por Header
    //! Modificar la funcion
    const store_id = getStoreId();
    //*
    const { name } = req.body;
    await validateTagPost(name, store_id )
    const result = await tagsPostController( name, store_id )
    return res.status(200).json( result )
} catch (error) {
    return res.status(400).json({ error: error.message })
}
}

const processTagPatch = async (req,res) => {
try {
    //! TODO
    // Agregar Validacion por Header
   
    //! Modificar la funcion
    const store_id = getStoreId();
    //*
    const { id, name } = req.body;
    if ( await isItAnExistingModelByID(id, store_id, Tag )) throw Error(`${INVALID_ID}${id}`)
    const result = await tagsPatchController(id, name, store_id);
    return res.status(200).json( result )
} catch (error) {
    return res.status(400).json({ error: error.message })
}
}

const processTagGet = async (req,res) => {
try {
    //! TODO
    // Agregar Validacion por Header
    //! Modificar la funcion
    const store_id = getStoreId();
    //*
    const result = await tagsGetController(store_id);
    return res.status(200).json( result )
} catch (error) {
    return res.status(400).json({ error: error.message })
}
}

const validateTagPost = async ( name, store_id ) => {
if (!name.trim() || typeof name != "string") throw Error(INVALID_TAG_NAME);
if ( await isItAnExistingModelByName(name, store_id, Tag ) ) throw Error(`${DUPLICATED_TAG_NAME}${name}`);
return true;
}

const processTagDelete = async (req,res) => {
try {
    //! TODO
    // Agregar Validacion por Header
    //! Modificar la funcion
    const store_id = getStoreId();
    //*
    const { id } = req.query;
    if ( id < 1) throw Error(`${INVALID_ID}${id}`);
    if ( !await isItAnExistingModelByID(id, store_id, Tag) ) throw Error(`${INVALID_TAG_ID}${id}`)
    const result = await tagsDeleteController( id, store_id );
    return res.status(200).json( result )
} catch (error) {
    return res.status(400).json({ error: error.message })
}
}
module.exports = {
processTagPost,
processTagGet,
processTagDelete,
processTagPatch

}