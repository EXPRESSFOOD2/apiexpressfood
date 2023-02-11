/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
require('dotenv').config();
const {Sequelize, Op } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DIALECT, DB_PORT, DB_SCHEMA } = process.env;

const sequelize = new Sequelize(
    `${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_SCHEMA}`,
    {
      logging: false,
      native: false,
    },
);

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
    .filter(
        (file) =>
          file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js',
    )
    .forEach((file) => {
      modelDefiners.push(require(path.join(__dirname, '/models', file)));
    });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
const entries = Object.entries(sequelize.models);
const capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);


// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Ingredient,
  Recipe,
  IngredientsRecipes,
  IngredientsMenuItems,
  MenuItem,
  Role,
  User,
  UsersRoles, } = sequelize.models;

//! Relationships
Recipe.belongsToMany( Ingredient, { through: IngredientsRecipes });
Ingredient.belongsToMany( Recipe, { through: IngredientsRecipes });

MenuItem.belongsToMany( Ingredient, { through: IngredientsMenuItems });
Ingredient.belongsToMany( MenuItem, { through: IngredientsMenuItems });

Role.belongsToMany( User, { through: UsersRoles });
User.hasOne( Role, { through: UsersRoles } );





module.exports = {
  ...sequelize.models,
  Op, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
