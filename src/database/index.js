const sequelize = require('./sequelize');

const sync = async () => {
    await sequelize.sync();
    return true;
}

module.exports = {
    sequelize,
    sync
}