// const { Sequelize } = require('sequelize');
const { Sequelize, DataTypes, Model } = require('sequelize');
// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('chien', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false, // ko muoosn in cau lenhj quyry thif dung cau lenh loggin
});

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

module.exports = connectDB;
