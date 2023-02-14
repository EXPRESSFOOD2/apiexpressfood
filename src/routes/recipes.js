const { Router } = require('express');
const router = Router();
const { validateRecipePost, validateRecipeGet , validateIdRecipe, validateRecipeData } = require("../middleware/recipe-middleware")
const { postRecipe } = require("../controllers/recipe-post-controller");
const { getAllRecipes } = require("../controllers/recipe-get-controller");
const { deleteRecipe } = require('../controllers/recipe-delete-controller');
const { updateRecipe } = require('../controllers/recipe-put-controller');

router.post("/", async (req, res) => {
    const { name, details, produced_amount, type_measure, ingredArray } = req.body;
    try {
        /* TODO */
        /* AUTH */
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
        /* AUTH */
        validateRecipeGet();
        const result = await getAllRecipes();
        return res.status(200).json( result )
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
})

router.delete("/", async (req, res) => {
    const { id_recipe  } = req.body
    try {
        /* TODO */
        validateIdRecipe(  id_recipe )
        const result = await deleteRecipe(id_recipe)
        return res.status(200).json(result)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
})



//sustituir por un put, para evitar logica del lado del front

router.put("/", async (req ,res )=> {
    const { id_recipe , name , detail} = req.body

    try {
        validateRecipeData(name , detail)
        const result = await updateRecipe ( id_recipe , name , detail )
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json(error.message)
    }
})

/*
router.patch("/", async (req, res) => {
    try {
        //! TODO
        return res.status(200).json( "Recipes PATCH" )
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
})
*/
module.exports = router;


