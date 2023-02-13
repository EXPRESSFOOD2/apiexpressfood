/* eslint-disable new-cap */
const {Router} = require('express');

// Importar todos los routers y middlewares;

const recipesRouter = require("./recipes");
const ingredient_get = require("./ingredient/ingredient_get")
const ingredient_post = require("./ingredient/ingredient_post")
const ingredient_put = require("./ingredient/ingredient_put")
const ingredientMiddleware = require("..//middleware/ingredient_post")

const router = Router();

//middlewares
router.use("/ingredients/create", ingredientMiddleware);
router.use("/ingredients/update", ingredientMiddleware);


// Configurar los routers
router.use("/ingredients", ingredient_get);
router.use("/ingredients", ingredient_post);
router.use("/ingredients", ingredient_put);
router.use("/recipes", recipesRouter);

module.exports = router;
