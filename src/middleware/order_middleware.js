const { getStoreId } = require("../controllers/HashFunction/security");
const { orderPatchController } = require("../controllers/order/order-patch_controller")
const { orderGetController, orderGetByIdController, orderGetBalanceController } = require("../controllers/order/order-get_controller")

const processOrderGetBalance = async (req, res) => {
    try {
        //! Validar si el usuario es dueño de la tienda
        const store_id = getStoreId();
        const { startDate, endDate } = req.body;
        const result  = await orderGetBalanceController( store_id, startDate, endDate )
        return res.status(200).json( result )
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

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
    const client_data = req.body
//   console.log(req.body);
    if(Object.keys(client_data).length){
    try {

        const store_id = getStoreId();
        const result  = await orderGetController(store_id, client_data)
        return res.status(200).json( result )
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }}else{
        try {

            const store_id = getStoreId();
            const result  = await orderGetController(store_id)
            return res.status(200).json( result )
        } catch (error) {
            return res.status(400).json({ error: error.message })
        }
    }

}
const processOrderGetById= async (req, res) => {
    try {
        const { id } = req.params;
        const  {email}  = req.body;
        //! Este Ctrl los saca el store_id de la galera
        //! Rever
        const store_id = getStoreId();
        const result  = await orderGetByIdController(id, store_id, email)
        return res.status(200).json( result )
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }

}

module.exports = {
    processOrderPatch,
    processOrderGet,
    processOrderGetById,
    processOrderGetBalance
}