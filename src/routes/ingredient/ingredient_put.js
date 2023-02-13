const { Router } = require('express');
const router = Router();
const { putIngredient } = require("../../controllers/ingredient//ingredient_put_controler")


router.put("/update", async (req, res) => {
    const {id, name, type_measure } = req.body;
    try {
     
        let result = await putIngredient(id,name, type_measure)
        if(!result) return res.status(200).send("The ingredient does not exist")
        return res.status(200).send("Ingredient updated successfully")
    } catch (error) {
        return res.status(200).send({ error: error.message })
    }
})

module.exports = router;