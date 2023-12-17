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
    await queryInterface.createTable("BasicExpenses",{
      categoryId:{
          type:Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement:true
      },
      categoryName:{
          type:Sequelize.STRING
      },
      amount:{
          type:Sequelize.DECIMAL(10,2)
      },
      isPrimary:{
          type:Sequelize.BOOLEAN
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
                fields: ["categoryId","categoryName"]
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
    await queryInterface.dropTable('BasicExpenses');
  }
};
