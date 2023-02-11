const { DataTypes } = require("sequelize");
const { ROLES_ENUM } = require("./utils/constants");

module.exports = (sequelize) => {
    sequelize.define("Role",{
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: "role_id"
        },
        name: {
            type: DataTypes.ENUM,
            values: ROLES_ENUM,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    })
}