const { DataTypes } = require("sequelize");
const { INVALID_RECIPE_NAME, INVALID_PRODUCED_AMOUNT, MIN_PROD_AMOUNT } = require("./utils/Recipe-ErrorMSGs");
//const { generateOldName } = require("../controllers/Utils/aux_controller")

module.exports = (sequelize) => {
    sequelize.define('Recipe', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: "recipe_id"
        },
        name: {
            type: DataTypes.STRING(70),
            allowNull: false,
            unique: true,
            validate: {
                notNull: {
                    msg: INVALID_RECIPE_NAME
                },
                notEmpty: {
                    msg: INVALID_RECIPE_NAME
                },
            },
            unique: "store_id-name"
        },
        details: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        produced_amount: {
            type: DataTypes.FLOAT,
            defaultValue: MIN_PROD_AMOUNT,
            validate: {
                isNumeric: {
                    msg: INVALID_PRODUCED_AMOUNT
                },
                min: MIN_PROD_AMOUNT,
            }
        },
        store_id: {
            //! TODO
            // Eliminar DefaulValue y default value
            //type: DataTypes.UUIDV4,
            type: DataTypes.STRING,
            defaultValue: "f3bc0474-620c-429d-a46c-df2460c7725a",
            allowNull: true,
            unique: "store_id-name"
        }
        //! Se reemplaza por deletedAt
        // is_active: {
        //     type: DataTypes.BOOLEAN,
        //     defaultValue: true
        // },
    }, {
        timestamps: true,
        paranoid: true,
        /*hooks: {
            beforeDestroy: instance => instance.name = generateOldName(instance.name)
          }*/
        })
}