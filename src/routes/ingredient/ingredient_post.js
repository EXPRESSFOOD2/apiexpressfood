const { Router } = require('express');
const router = Router();
const { postIngredient } = require("../..//controllers/ingredient/ingredient_post_controller")


router.post("/create", async (req, res) => {
    const { name, type_measure } = req.body;
    try {
     
        let result = await postIngredient(name, type_measure)
        if(!result) return res.status(200).send("The ingredient is already in the database")
        return res.status(201).send("Ingredient created successfully")
    } catch (error) {
        return res.status(200).send({ error: error.message })
    }
})

module.exports = router;