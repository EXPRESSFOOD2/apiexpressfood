const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("IngredientsRecipes", {
        per_recipe: {
            type: DataTypes.FLOAT,
            defaultValue: 1
          },
          waste_rate: {
            type: DataTypes.FLOAT,
            defaultValue: 0
          }
    })
}