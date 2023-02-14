const IngredientSeed = require('./Ingredient-seed');
const RecipeSeed1 = require('./Recipe-layer1-seed');
//const Seed = require('./');

module.exports = function() {
    return Promise.all([ // Returning and thus passing a Promise here
        // Independent seeds first
        IngredientSeed(),
       
       // MaterialSeed(),
    ]).then(() => {
        // More seeds that require IDs from the seeds above 
        RecipeSeed1();
    }).then(() => {
        console.log('********** Successfully seeded db **********');
    });
}