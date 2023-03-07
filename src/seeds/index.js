const CreateUserStore = require("./CreateUserStore")
const CreateTags = require("./CreateTags")
const CreateIngredients = require("./CreateIngredients")
const CreateRecipes = require("./CreateRecipes")
const CreateMenuItems = require("./CreateMenuItems")
const CreateTagsMenuItems = require("./CreateTagsMenuItems")
const CreateReviews = require("./CreateReviews")


module.exports = async function() {
    await Promise.all([ // Returning and thus passing a Promise here
        await CreateUserStore(),
        await CreateTags()
    ]).then(() => {
        //CreateIngredients()
    }).then(() => {
        //CreateRecipes()
    }).then(() => {
        //CreateMenuItems(),
        //CreateTagsMenuItems()
        //! Habilitar solo si la relacion Review-OrderMenu en db.js está deshabilitada
        //, CreateReviews()
        
    }).then(() => {
        console.log('********** Successfully seeded db **********');
    }).then(()=>{
        
    })


}