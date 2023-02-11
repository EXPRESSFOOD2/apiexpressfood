const { DataTypes } = require("sequelize");

const { INVALID_EMAIL } = require("./utils/Recipe-ErrorMSGs")

module.exports = (sequelize) => {
    sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: "user_id"
        },
        name: {
            type: DataTypes.STRING(70),
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING(70),
            allowNull: false
        },
        account_name: {
            type: DataTypes.STRING(35),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: {
                    msg: INVALID_EMAIL
                },
                notEmpty: true,
                notNull: {
                  msg: INVALID_EMAIL
                }
              },
        },
        secret: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    })
}