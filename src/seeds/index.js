const IngredientSeed = require('./Ingredient-seed');
const RecipeSeed1 = require('./Recipe-layer1-seed');
const RecipeSeed2 = require('./Recipe-layer2-seed');
const RecipeSeed3 = require('./Recipe-layer3-seed');
const Menu = require("./Menu-seed")
//const Seed = require('./');

module.exports = async function() {
    return await Promise.all([ // Returning and thus passing a Promise here
        // Independent seeds first
         IngredientSeed()
       // MaterialSeed(),
    ]).then(() => {
        // More seeds that require IDs from the seeds above
        RecipeSeed1()
    }).then(() => {
        RecipeSeed2()
    }).then(() => {
        RecipeSeed3()
    }).then(() => {
        Menu()
    }).then(() => {
        console.log('********** Successfully seeded db **********');
    });
}