const { DataTypes } = require("sequelize");
const { INVALID_TAG_NAME } = require("./utils/Tag-ErrorMSGs");

module.exports = (sequelize) => {
    sequelize.define('Tag', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            field: "tag_id"
        },
        name: {
            type: DataTypes.STRING(70),
            allowNull: false,
            unique: true,
            validate: {
                notNull: {
                    msg: INVALID_TAG_NAME
                },
                notEmpty: {
                    msg: INVALID_TAG_NAME
                },
            }
        },
    }, { timestamps: false })
}