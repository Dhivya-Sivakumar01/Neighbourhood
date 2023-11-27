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
    await queryInterface.createTable("ApartmentDetails",{
      id:{
          type:Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement:true
      },
      apartmentId:{
          allowNull:false,
          type:Sequelize.INTEGER,
          references: {
              model : 'Apartment',
              key: 'apartmentId'
          }
      },
      blockNumber:{
          type:Sequelize.STRING,
          allowNull:false
      },
      doorNumber:{
          type:Sequelize.STRING,
          allowNull:false
      },
      ownerId:{
          type:Sequelize.INTEGER,
          allowNull:false,
          references:{
              model: 'Residents',
              key: 'id'
          }
      },
      tenantId:{
          type:Sequelize.INTEGER,
          allowNull:false,
          references:{
              model: 'Residents',
              key: 'id'
          }
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
                fields: ["id"]
            }
        }
    },
    {
        timestamps: false
    }
  )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('ApartmentDetails')
  }
};
