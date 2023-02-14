const { Router } = require("express");
const router = Router();
const {
  getIngredients,
} = require("../..//controllers/ingredient/ingredient_get_controller");

router.get("/", async (req, res) => {
  try {
    const ingredients = await getIngredients();
    if (ingredients === false) {
      return res.status(200).send("There are no ingredients to display");
    } else {
      return res.status(200).send(ingredients);
    }
  } catch (error) {
    return res.status(400).send( error.message );
  }
});

module.exports = router;
