const { Router } = require('express');
const router = Router();
const { deleteIngredient } = require("../../controllers/ingredient//ingredient_delete_controller")


router.put("/update", async (req, res) => {
    const {id, name, type_measure } = req.body;
    try {
     
        let result = await deleteIngredient(id)
        if(!result) return res.status(200).send("The ingredient does not exist")
        return res.status(200).send("Ingredient deleted successfully")
    } catch (error) {
        return res.status(200).send({ error: error.message })
    }
})

module.exports = router;