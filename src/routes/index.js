/* eslint-disable new-cap */
const {Router} = require('express');
const router = Router();

//* Recipe Routes
const recipesPostRouter = require("./recipes/recipes_post");
const recipesGetRouter = require("./recipes/recipes_get");
const recipesDeleteRouter = require("./recipes/recipes_delete");
const recipesPatchRouter = require("./recipes/recipes_patch");

//* User Routes
const usersPostRouter = require("./users/users-post");
const usersGetLoginRouter = require("./users/users-login");
const usersGetActivateAccount = require("..//routes/users/user-get-activation");

//* Ingredient Routes
const ingredientsPostRouter = require("./ingredients/ingredients-post");
const ingredientsGetRouter = require("./ingredients/ingredients-get");
const ingredientsDeleteRouter = require("./ingredients/ingredients-delete");
const ingredientsPatchRouter = require("./ingredients/ingredients-patch");

//* Menu Routes
const menuPostRouter = require("./menu/menu-post");
const menuGetRouter = require("./menu/menu-get");
const menuDeleteRouter = require("./menu/menu-delete");
const menuPatchRouter = require("./menu/menu-patch");

//* Recipe
router.use("/recipes/create", recipesPostRouter);
router.use("/recipes/get", recipesGetRouter);
router.use("/recipes/delete", recipesDeleteRouter);
router.use("/recipes/update", recipesPatchRouter);

//* User
router.use("/users/create", usersPostRouter);
router.use("/users/activate_account", usersGetActivateAccount);
router.use("/users/login", usersGetLoginRouter);

//* Ingredient
router.use("/ingredients/create", ingredientsPostRouter);
router.use("/ingredients/get", ingredientsGetRouter);
router.use("/ingredients/update", ingredientsPatchRouter);
router.use("/ingredients/delete", ingredientsDeleteRouter);

//* Menu
router.use("/menu/create", menuPostRouter);
router.use("/menu/get", menuGetRouter);
router.use("/menu/update", menuPatchRouter);
router.use("/menu/delete", menuDeleteRouter);


module.exports = router;

