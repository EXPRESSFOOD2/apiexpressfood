/* eslint-disable new-cap */
const {Router} = require('express');

// Importar todos los routers y middlewares;

const recipesRouter = require("./recipes");

const router = Router();

// Configurar los routers
router.use("/ingredients", ingredient_get);
router.use("/ingredients", ingredient_post);
router.use("/ingredients", ingredient_put);
router.use("/ingredients", ingredient_delete);
router.use("/recipes", recipesRouter);

router.use("/users/create", usersRouterPost);
router.use("/users/login", usersGetLogin);

module.exports = router;
