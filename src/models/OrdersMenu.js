const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
    sequelize.define('OrdersMenu', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
        quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
            allowNull: false
        }
    },{ timestamps: false })
}