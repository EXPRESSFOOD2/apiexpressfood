const {Recipe} = require('../app')


const updateRecipe = ( id , name , detail) => {

    const recipe = Recipe.findByPk(id)

    recipe.name = name
    recipe.detail = detail

    return 'Done!'
}


module.exports= {
    updateRecipe
}