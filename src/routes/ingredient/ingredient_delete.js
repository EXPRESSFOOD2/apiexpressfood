const { Router } = require('express');
const router = Router();
const { deleteIngredient } = require("../../controllers/ingredient//ingredient_delete_controller")


router.delete("/delete", async (req, res) => {
    //mandar id por params
    const ingredientsIds = req.body;
    try {
     
     await deleteIngredient(ingredientsIds)
return res.status(200).send({msg:"Ingredients was deleted successfully"})
      
    } catch (error) {
        return res.status(200).send({ error: error.message })
    }
})

module.exports = router;