const { Router } = require('express');
const router = Router();
//const { postRecipe } = require("../controllers/recipe-post-controller");

router.post("/", async (req, res) => {
    //const {name, details, produced_amount, type_measure, ingredArray} = req.body;
    try {
        /* TODO */
        // VAlidar el el name(R) no se encuentra repetido en Ingredients && body anda Bien
        // Crear y Retornar
        return res.status(200).send( "Recipes POST" )
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


