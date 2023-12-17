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
    await queryInterface.createTable("ExpenseHistory",{
      expenseId:{
          type:Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement:true
      },
      maintenanceId:{
          type:Sequelize.INTEGER,
          references:{
              model:'MaintenanceHistory',
              key:'maintenanceId'
          }
      },
      categoryId:{
          type:Sequelize.INTEGER,
          references:{
              model:'BasicExpenses',
              key:'categoryId'
          }
      },
      amount:{
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
                fields: ["expenseId"]
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
    await queryInterface.dropTable('ExpenseHistory')
  }
};
