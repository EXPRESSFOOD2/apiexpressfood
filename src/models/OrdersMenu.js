const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
    sequelize.define('OrdersMenu', {},{ timestamps: false, paranoid: true })
}