const { Sequelize } = require('sequelize')

const SEQUELIZE_HOST = process.env.SEQUELIZE_HOST;
const SEQUELIZE_PORT = process.env.SEQUELIZE_PORT;
const SEQUELIZE_DIALECT = process.env.SEQUELIZE_DIALECT;
const SEQUELIZE_DATABASE = process.env.SEQUELIZE_DATABASE;
const SEQUELIZE_USERNAME = process.env.SEQUELIZE_USERNAME;
const SEQUELIZE_PASSWORD = process.env.SEQUELIZE_PASSWORD;

const database = new Sequelize(
    SEQUELIZE_DATABASE,
    SEQUELIZE_USERNAME,
    SEQUELIZE_PASSWORD,
    {
        host: SEQUELIZE_HOST,
        port: SEQUELIZE_PORT,
        dialect: SEQUELIZE_DIALECT,
    }
);

module.exports = database;