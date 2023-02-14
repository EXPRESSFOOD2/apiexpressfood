/* eslint-disable new-cap */
const {Router} = require('express');
const router = Router();

//* User Routes
const usersPostRouter = require("./users/users-post");
const usersGetLoginRouter = require("./users/users-login");

//* Ingredient Routes
const ingredientsPostRouter = require("./ingredients/ingredients-post");
const ingredientsGetRouter = require("./ingredients/ingredients-get");
const ingredientsDeleteRouter = require("./ingredients/ingredients-delete");
const ingredientsPatchRouter = require("./ingredients/ingredients-patch");

//* User
router.use("/users/create", usersPostRouter);
router.use("/users/login", usersGetLoginRouter);

//* Ingredient
router.use("/ingredients/create", ingredientsPostRouter);
router.use("/ingredients/get", ingredientsGetRouter);
router.use("/ingredients/update", ingredientsPatchRouter);
router.use("/ingredients/delete", ingredientsDeleteRouter);

//* Recipe
//router.use("/recipes/get", )

module.exports = router;

