const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
    sequelize.define('OrdersMenu', {
        quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
            allowNull: false
          },
    },{ timestamps: false })
}