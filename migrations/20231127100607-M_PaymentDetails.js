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
    await queryInterface.createTable("PaymentDetails",{
      id:{
          type:Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement:true
      },
      apartmentId:{
          allowNull:false,
          type:Sequelize.INTEGER,
          references: {
              model : 'ApartmentDetails',
              key: 'id'
          }
      },
      residentId:{
          allowNull:false,
          type:Sequelize.INTEGER,
          references:{
              model:'Residents'
          }
      },
      paymentDate:{
          allowNull:false,
          type:Sequelize.DATE
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
                fields: ["id","paymentDate"]
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
    await queryInterface.dropTable('PaymentDetails')
  }
};
