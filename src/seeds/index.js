const IngredientSeed = require('./Ingredient-seed');
const RecipeSeed1 = require('./Recipe-layer1-seed');
const RecipeSeed2 = require('./Recipe-layer2-seed');
const RecipeSeed3 = require('./Recipe-layer3-seed');
const Menu = require("./Menu-seed")
const Role = require("./Role-seed")
const Tag = require("./Tag-seed")
const MenuTags = require("./MenuTags-seed")
const User = require("./User-seed")
//const Seed = require('./');
//! BORRAR DESPUES DE PROBAR
const { tagsPostController, processCode } = require("../controllers/order/order-post_controller")

module.exports = async function() {
    await Promise.all([ // Returning and thus passing a Promise here
        // Independent seeds first
        IngredientSeed(),
        Role(),
        Tag(),
    ]).then(() => {
        // More seeds that require IDs from the seeds above
        RecipeSeed1()
    }).then(() => {
        RecipeSeed2()
    }).then(() => {
        RecipeSeed3()
    }).then(() => {
        console.log('********** Successfully seeded db **********');
    });

    await Promise.all([ // Returning and thus passing a Promise here
        // Independent seeds first
        Menu(),
        MenuTags(),
        User(),
    ])
    setTimeout(( async () => {
        tagsPostController(113, "{\"client_data\": id:114}", "f3bc0474-620c-429d-a46c-df2460c7725a")
    }), 200);
    setTimeout(( async () => {
        tagsPostController(13, "{\"client_data\": id:xx}", "f3bc0474-620c-429d-a46c-df2460c7725a")
    }), 400);
    setTimeout(( async () => {
        tagsPostController(133, "{\"client_data\": id:yyy}", "f3bc0474-620c-429d-a46c-df2460c7725a")
    }), 500);
    setTimeout(( async () => {
        tagsPostController(123, "{\"client_data\": id:yyXy}", "f3bc0474-620c-429d-a46c-df2460c7725a")
    }), 600);
    //tagsPostController(113, "{\"client_data\": id:114}", "f3bc0474-620c-429d-a46c-df2460c7725a")
   
    //tagsPostController(133, "{\"client_data\": id:114}", "f3bc0474-620c-429d-a46c-df2460c7725a")
    //processCode("Y999")
}