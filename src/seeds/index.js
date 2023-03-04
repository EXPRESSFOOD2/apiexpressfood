const CreateUserStore = require("./CreateUserStore")
const CreateTags = require("./CreateTags")
const CreateIngredients = require("./CreateIngredients")
const CreateRecipes = require("./CreateRecipes")
const CreateMenuItems = require("./CreateMenuItems")
const CreateTagsMenuItems = require("./CreateTagsMenuItems")
module.exports = async function() {
    await Promise.all([ // Returning and thus passing a Promise here
        await CreateUserStore(),
        await CreateTags()
    ]).then(() => {
        CreateIngredients()
    }).then(() => {
        CreateRecipes()
    }).then(() => {
        CreateMenuItems(),
        CreateTagsMenuItems()
    }).then(() => {
        console.log('********** Successfully seeded db **********');
    }).then(()=>{
        
    })


}