const { Router } = require("express");
const router = Router();
const {
  postIngredient,
} = require("../..//controllers/ingredient/ingredient_post_controller");

router.post("/create", async (req, res) => {
  const ingredients = req.body;
  try {
    let result = await postIngredient(ingredients);
 return res.status(200).json(result);
 

  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

module.exports = router;
