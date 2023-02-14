const { Router } = require('express');
const router = Router();
const { putIngredient } = require("../../controllers/ingredient//ingredient_put_controler")


router.put("/update", async (req, res) => {

    //mandar id por params
    const {id, name, type_measure } = req.body;
    try {
     
        let result = await putIngredient(id,name, type_measure)
       return res.status(200).send(result)
       
    } catch (error) {
        return res.status(200).send({ error: error.message })
    }
})

module.exports = router;