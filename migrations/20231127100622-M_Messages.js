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
    await queryInterface.createTable("Messages",{
      id:{
          type:Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement:true
      },
      messageTitle:{
          allowNull:false,
          type:Sequelize.STRING
      },
      image:{
          allowNull:false,
          type:Sequelize.BLOB
      },
      description:{
          allowNull:false,
          type:Sequelize.STRING
      },
      createdBy:{
          allowNull:false,
          type:Sequelize.INTEGER,
          references:{
              model:'Residents'
          }
      },
      type:{
          allowNull:false,
          type:Sequelize.ENUM("Announcement","Feedback","Post")
      },
      messageId:{
          allowNull:true,
          type:Sequelize.INTEGER,
          references:{
              model:'Messages'
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
    await queryInterface.dropTable('Messages');
  }
};
