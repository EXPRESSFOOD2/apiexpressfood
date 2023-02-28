const { getStoreId } = require("../controllers/HashFunction/security");
const { orderPatchController } = require("../controllers/order/order-patch_controller")
const { orderGetController, orderGetByIdController } = require("../controllers/order/order-get_controller")

const processOrderPatch = async (req, res) => {
    try {
        //! Rever
        const { id, status } = req.body;
        const store_id = getStoreId();
        //! Validar Algo
        //! uizas estampar el ID del usuario que está haciendo el Patch
        const result  = await orderPatchController( id, store_id, status );
        return res.status(200).json( result )
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}
const processOrderGet = async (req, res) => {
    const email = req.body
    try {
        //! Rever
        const store_id = getStoreId();
        const result  = await orderGetController(store_id, email)
        return res.status(200).json( result )
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }

}
const processOrderGetById= async (req, res) => {
    try {
        const { id } = req.params;
        //! Rever
        const store_id = getStoreId();
        const result  = await orderGetByIdController(id, store_id)
        return res.status(200).json( result )
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }

}

module.exports = {
    processOrderPatch,
    processOrderGet,
    processOrderGetById
}