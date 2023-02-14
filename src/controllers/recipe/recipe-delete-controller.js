const { Recipe } = require('../../db')

const deleteRecipe = async ( id ) => {

    const recipe = await  Recipe.findByPk( id )

    if(!recipe){
        throw Error('a recipe is not related to that id number')
    }else{
        const resultDelete = Recipe.destroy({where:{id}})

        return `the recipe : ${ resultDelete.name} has been successfully removed`
    }

}


module.exports = {
    deleteRecipe
}