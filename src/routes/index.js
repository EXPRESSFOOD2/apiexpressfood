/* eslint-disable new-cap */
const {Router} = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const ingredientsRouter = require("./ingredients")
const recipesRouter = require("./recipes");
const usersRouterPost = require("./users/users_post");

const router = Router();

// Configurar los routers
router.use("/ingredients", ingredientsRouter);
router.use("/recipes", recipesRouter);

router.use("/users", usersRouterPost);

module.exports = router;
