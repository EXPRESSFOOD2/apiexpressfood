/* eslint-disable new-cap */
const {Router} = require('express');
const router = Router();

//* Images Processor
const processImage = require("./utils/getImageReturnUrl")

//* Cart
const cartGetRouter = require("./utils/cart/carts_get")
const cartPatchRouter = require("./utils/cart/carts_patch")

//* Recipe Routes
const recipesPostRouter = require("./recipes/recipes_post");
const recipesGetRouter = require("./recipes/recipes_get");
const recipesDeleteRouter = require("./recipes/recipes_delete");
const recipesPatchRouter = require("./recipes/recipes_patch");

//* User Routes
const usersPostRouter = require("./users/users-post");
const usersGetLoginRouter = require("./users/users-login");
const rolesGet = require(".//users//user-get-roles");
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


//* Tags Routes
const tagsPostRouter = require("./tags/tags_post");
const tagsGetRouter = require("./tags/tags_get");
const tagsDeleteRouter = require("./tags/tags_delete");
const tagsPatchRouter = require("./tags/tags_patch");

//*Payments Routes
const PaymentRouter = require("../routes/payments/payments-router")



//! google route
const authGoogle = require("./login-google");

//* Images Processor
router.use("/processImage/post", processImage);

//* Carts
router.use("/carts/get", cartGetRouter );
router.use("/carts/patch", cartPatchRouter );

//* Recipe
router.use("/recipes/create", recipesPostRouter);
router.use("/recipes/get", recipesGetRouter);
router.use("/recipes/delete", recipesDeleteRouter);
router.use("/recipes/update", recipesPatchRouter);

//* User
router.use("/users/create", usersPostRouter);
router.use("/roles/get", rolesGet);
router.use("/users/activate_account", usersGetActivateAccount);
router.use("/users/login", usersGetLoginRouter);


router.use("/tags/create", tagsPostRouter);
router.use("/tags/get", tagsGetRouter);
router.use("/tags/delete", tagsDeleteRouter);
router.use("/tags/update", tagsPatchRouter);

//!PAYPAL
router.use("/payments/create", PaymentRouter)


//! auth google
router.use("/auth",authGoogle )

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

