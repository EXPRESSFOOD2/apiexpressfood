const { DataTypes } = require("sequelize");

const { INVALID_EMAIL, INVALID_NAME, INVALID_LAST_NAME } = require("./utils/User-ErrorMSGs")

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
            validate: {
                is: /^[a-zA-Z íáúóéÍÁÓÚÉñÑ]*$/,
                notEmpty: true,
                notNull: {
                  msg: INVALID_NAME
                }
              },
        },
        last_name: {
            type: DataTypes.STRING(70),
            allowNull: false,
            validate: {
                is: /^[a-zA-Z íáúóéÍÁÓÚÉñÑ]*$/,
                notEmpty: true,
                notNull: {
                  msg: INVALID_LAST_NAME
                }
              },
        },
        account_name: {
            type: DataTypes.STRING(35),
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
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
        phone: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        activation_token: {
            type: DataTypes.STRING,
            allowNull: false
        },
        profile_image: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, { timestamps: true, paranoid: true })
}