const Sequelize = require('sequelize');
const db = require('./db');

const Torre = db.define('torres', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: Sequelize.STRING,
    },
    longitude: {
        type: Sequelize.STRING,
    },
    latitude: {
        type: Sequelize.STRING,
    }

});

module.exports = Torre;