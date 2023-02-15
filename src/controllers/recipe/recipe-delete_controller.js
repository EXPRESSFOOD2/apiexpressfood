const { Recipe } = require("../../db");

const recipesDeleteController = async (id) => {
    return await Recipe.destroy({where: {id}});
};

module.exports = { recipesDeleteController };