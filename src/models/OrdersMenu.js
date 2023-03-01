const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
    sequelize.define('OrdersMenu', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
    },{ timestamps: false })
}