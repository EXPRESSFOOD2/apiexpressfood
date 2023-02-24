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
                //isNull: { msg: INVALID_PRICE },
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
        },
        code: {
            type: DataTypes.STRING(4),
            allowNull: true,
            defaultValue: "A000"
        },
        store_id: {
            //! TODO
            // Eliminar DefaulValue y default value
            //type: DataTypes.UUIDV4,
            type: DataTypes.STRING,
            defaultValue: "f3bc0474-620c-429d-a46c-df2460c7725a",
            allowNull: true,
        },
        status: {
            type: DataTypes.ENUM,
            values: ["Canceled", "In Progress", "Ready", "Finished"],
            defaultValue: "In Progress",
            allowNull: false,
        }
    },
    {
        timestamps: true,
        paranoid: true,
    })
}
