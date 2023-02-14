const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("IngredientsRecipes", {
          waste_rate: {
            type: DataTypes.FLOAT,
            defaultValue: 0
          }
    })
}