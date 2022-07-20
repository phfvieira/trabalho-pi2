'use strict';
    module.exports = {
      async up(queryInterface, Sequelize) {
        await queryInterface.createTable('shirts', {
          id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
          },
          name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
          },
          team: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          price: {
            type: Sequelize.DOUBLE,
            allowNull: false,
          },
          composition: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          description: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          linkimg: {
            type: Sequelize.STRING,
            allowNull: false,
          },
        });
      },

      async down(queryInterface) {
        await queryInterface.dropTable('shirts');
      },
    };

