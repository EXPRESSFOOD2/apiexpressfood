const { Router } = require('express');
const router = Router();
const { getIngredients } = require("../..//controllers/ingredient/ingredient_get_controller")


router.get("/", async (req, res) => {
    try {
 const ingredients = getIngredients();
 if(!ingredients)
        return res.status(200).send("There are no ingredients to display")
        return res.status(200).sendStatus(ingredients)
    } catch (error) {
        return res.status(400).send({ error: error.message })
    }
});

module.exports = router;