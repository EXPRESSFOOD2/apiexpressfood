const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("MenuItem", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: "menu_item_id"
        },
        name: {
            type: DataTypes.STRING(70),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0
        },
        recomend_first: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        stock: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        url_image: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { timestamps: true, paranoid: true })
}