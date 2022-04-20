'use strict';

// const { Model } = require('sequelize');
const { Sequelize, DataTypes, Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class History extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // định danh các mối quan hệ
            // define association here
        }
    }
    History.init(
        {
            patientId: DataTypes.INTEGER,
            doctorId: DataTypes.INTEGER,
            description: DataTypes.TEXT,
            flies: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: 'History',
        }
    );
    return History;
};
