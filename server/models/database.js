'user strict';

const logger = require('../../tools/logger');

const fs = require('fs');
const path = require('path');
const basename = path.basename(module.filename);
const Sequelize = require('sequelize');
const sequelize = new Sequelize('rpg_game_dev', process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  logging: false
});

sequelize
  .authenticate()
  .then(() => {
    /*eslint-disable */
    console.log('Database connected.');
    /*eslint-enable */
  })
  .catch((err) => {
    /*eslint-disable */
    console.log(err);
    /*eslint-enable */
    logger.critical(err);
  });

let database = {};
database.sequelize = sequelize;
database.Sequelize = Sequelize;

fs
  .readdirSync(__dirname)
  .filter((file) =>
    (file.indexOf('.') !== 0) &&(file !== basename) &&(file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    database[model.name] = model;
  });

Object.keys(database).forEach((modelName) => {
  if ("associate" in database[modelName]) {
    database[modelName].associate(database);
  }
});

database.sequelize.sync();

module.exports = database;