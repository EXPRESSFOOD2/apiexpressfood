/* eslint-disable new-cap */
const {Router} = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const ingredientsRouter = require("./ingredients")
const recipesRouter = require("./recipes");
const usersRouterPost = require("./users/users_post");
const usersGetLogin = require("./users/users_login");

const router = Router();


// Configurar los routers
router.use("/ingredients", ingredientsRouter);
router.use("/recipes", recipesRouter);

router.use("/users/create", usersRouterPost);
router.use("/users/login", usersGetLogin);

module.exports = router;
