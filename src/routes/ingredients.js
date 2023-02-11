const { Router } = require('express');
const router = Router();
//const { postIngredient } = require("../controllers/ingredient-post-controller")

router.get("/", async (req, res) => {
    try {
        /* TODO */
        return res.status(200).json( "GET FUNCIONA" )
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
});

router.post("/", async (req, res) => {
    //const { name, layer, type_measure } = req.body;
    try {
        /* TODO */
        //let result = await postIngredient(name, layer, type_measure)
        return res.status(200).json( "result" )
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
})

module.exports = router;