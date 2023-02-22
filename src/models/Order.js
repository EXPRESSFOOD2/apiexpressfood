const { DataTypes } = require("sequelize");
const { INVALID_PRICE } = require("./utils/Order-ErrorMSGs");

module.exports = (sequelize) => {
    sequelize.define('Order', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            field: "order_id"
        },
        total: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            validate: {
                isDecimal: { msg: INVALID_PRICE },
                isNull: { msg: INVALID_PRICE },
                min: 0
            }
        },
        is_ready: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        client_data: {
            type: DataTypes.JSON,
            allowNull: true,
        }
    },{ timestamps: true, paranoid: true })
}