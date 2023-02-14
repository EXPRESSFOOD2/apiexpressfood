/* eslint-disable new-cap */
const {Router} = require('express');

// Importar todos los routers y middlewares;

const recipesRouter = require("./recipes");
const ingredient_get = require("./ingredient/ingredient_get")
const ingredient_post = require("./ingredient/ingredient_post")
const ingredient_put = require("./ingredient/ingredient_put")
const ingredient_delete = require("./ingredient/ingredient_delete")
const {ingredient_middleware} = require("../middleware/ingredient_middleware.js")
const {ingredient_delete_middleware} = require("../middleware/ingredient_delete_middleware.js")
const {ingredient_put_middleware} = require("../middleware//ingredient_put_middleware")
const usersRouterPost = require("./users/users_post");
const usersGetLogin = require("./users/users_login");

const router = Router();

//middlewares
router.use("/ingredients/create", ingredient_middleware);
router.use("/ingredients/update", ingredient_put_middleware);
router.use("/ingredients/delete", ingredient_delete_middleware);


// Configurar los routers
router.use("/ingredients", ingredient_get);
router.use("/ingredients", ingredient_post);
router.use("/ingredients", ingredient_put);
router.use("/ingredients", ingredient_delete);
router.use("/recipes", recipesRouter);

router.use("/users/create", usersRouterPost);
router.use("/users/login", usersGetLogin);

module.exports = router;
