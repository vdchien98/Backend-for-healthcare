'use strict';
const { Sequelize, DataTypes, Model } = require('sequelize');
email: DataTypes.STRING,
    (module.exports = {
        up: async (queryInterface, Sequelize) => {
            return queryInterface.bulkInsert('Users', [
                {
                    email: 'admin@gmail.com',
                    password: '123456',
                    firstName: 'Chien',
                    lastName: 'Dang',
                    address: 'VietNam',
                    gender: 1,
                    // typeRole: 'ROLE',
                    // keyRole: 'R1',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ]);
        },

        down: async (queryInterface, Sequelize) => {
            /**
             * Add commands to revert seed here.
             *
             * Example:
             * await queryInterface.bulkDelete('People', null, {});
             */
        },
    });
