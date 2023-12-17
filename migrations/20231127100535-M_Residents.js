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
    await queryInterface.createTable('Residents', {
      residentId:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      residentName:{
          type:Sequelize.STRING,
          allowNull:false
      },
      type:{
          type:Sequelize.ENUM("Owner","Tenant"),
          allowNull:false
      },
      isOfficeBearer:{
          type:Sequelize.BOOLEAN,
          allowNull:false,
          defaultValue:0
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
                fields: ["residentId","residentName","type"]
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
    await queryInterface.dropTable('Resident')
  }
};
