'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('Apartment', {
      apartmentId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      apartmentName:{
          allowNull: false,
          type: Sequelize.STRING
      },
      location:{
          allowNull: false,
          type: Sequelize.STRING
      },
      createdAt:{
          type: Sequelize.DATE
      },
      updatedAt:{
          type: Sequelize.DATE
      },
      deletedAt:{
          type: Sequelize.DATE
      }
    },
    {
      uniqueKeys: {
          unique_tag: {
              customIndex: true,
              fields: ["apartmentId","location"]
          }
      }
    },
    {
        timestamps: false
    }
  );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('Apartment');
  }
};
