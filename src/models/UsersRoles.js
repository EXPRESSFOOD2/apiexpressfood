const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("UsersRoles", {
        created_by_user: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, { timestamps: false })
}