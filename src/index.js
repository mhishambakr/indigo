const Sequelize = require('sequelize');

const { DB, USER, PASSWORD, HOST, dialect, DB2 } = require('../config/db.config')

const sequelize = new Sequelize(
    DB,
    USER,
    PASSWORD,
    {
        host: HOST,
        dialect,
        operatorsAliases: 'false',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: true
    }
)

const Station = require('./Station/Station.model')(sequelize, Sequelize);
const Bike = require('./Bike/Bike.model')(sequelize, Sequelize);

Station.hasMany(Bike)
module.exports = {
    sequelize,
    Station,
    Bike
}