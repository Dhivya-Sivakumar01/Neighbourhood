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
    await queryInterface.createTable("MaintenanceHistory",{
      maintenanceId:{
          type:Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement:true
      },
      month:{
          type:Sequelize.ENUM("January","February","March","April","May","June","July","August","September","October","November","December")
      },
      totalAmount:{
          type:Sequelize.DECIMAL(10,2)
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
                fields: ["maintenanceId","month"]
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
    await queryInterface.dropTable('MaintenanceHistory')
  }
};
