const { DataTypes } = require("sequelize");
const { DUPLICATED_NAME, INVALID_STORE_NAME, ALPHANUMERIC_ONLY, INVALID_STORE_SHORT_NAME,
        DUPLICATED_SHORT_NAME, INVALID_STORE_DESC } = require("./utils/Store-ErrorMSGs");

module.exports = (sequelize) => {
    sequelize.define('Store', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
            validate: {
              isUUID: 4,
            }
          },
        name: {
            type: DataTypes.STRING(80),
            allowNull: false,
            unique: true,
            validate: {
                notNull: { msg: INVALID_STORE_NAME },
                notEmpty: { msg: INVALID_STORE_NAME },
            },
            unique: { msg: DUPLICATED_NAME }
        },
        short_name: {
            type: DataTypes.STRING(70),
            allowNull: false,
            unique: true,
            validate: {
                notNull: { msg: INVALID_STORE_SHORT_NAME },
                notEmpty: { msg: INVALID_STORE_SHORT_NAME },
                isAlphanumeric: { msg: ALPHANUMERIC_ONLY},
            },
            unique: { msg: DUPLICATED_SHORT_NAME }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: INVALID_STORE_DESC },
                notEmpty: { msg: INVALID_STORE_DESC },
            },
        },
    }, { timestamps: false, paranoid: true })
}