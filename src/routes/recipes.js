const { Router } = require('express');
const router = Router();
const { validateRecipePost } = require("../middleware/recipe-middleware")
const { postRecipe } = require("../controllers/recipe-post-controller");

router.post("/", async (req, res) => {
    const { name, details, produced_amount, type_measure, ingredArray } = req.body;
    try {
        validateRecipePost( name, details, produced_amount, type_measure, ingredArray );
        let result = await postRecipe(name, details, produced_amount, type_measure, ingredArray);
        return res.status(200).json( result )
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
})

router.get("/", async (req, res) => {
    try {
        /* TODO */
        return res.status(200).json( "Recipes GETS" )
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
})

router.delete("/", async (req, res) => {
    try {
        /* TODO */
        return res.status(200).json( "Recipes DELETE" )
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
})

router.patch("/", async (req, res) => {
    try {
        /* TODO */
        return res.status(200).json( "Recipes PATCH" )
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
})

module.exports = router;


