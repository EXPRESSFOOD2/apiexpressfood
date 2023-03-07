const CreateUserStore = require("./CreateUserStore")
const CreateTags = require("./CreateTags")
const CreateIngredients = require("./CreateIngredients")
const CreateRecipes = require("./CreateRecipes")
const CreateMenuItems = require("./CreateMenuItems")
const CreateTagsMenuItems = require("./CreateTagsMenuItems")
const CreateReviews = require("./CreateReviews")
const CreateOrders = require("./CreateOrders")

module.exports = async function() {
    await Promise.all([ // Returning and thus passing a Promise here
        await CreateUserStore(),
        await CreateTags()
    ]).then(async () => {
        await CreateIngredients()
    }).then(async () => {
        //CreateRecipes()
        await CreateMenuItems()
    }).then(async () => {
        await CreateOrders()
        //! Habilitar solo si la relacion Review-OrderMenu en db.js está deshabilitada
        //, CreateReviews()
    }).then(async () => {
        //CreateTagsMenuItems()

    }).then(()=>{
        console.log('********** Successfully seeded db **********');
    })


}