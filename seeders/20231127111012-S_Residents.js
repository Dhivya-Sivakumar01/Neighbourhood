'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Residents', [
      {
          residentName: "Dhivya S",
          type:"Owner",
          isOfficeBearer:0,
          createdAt:'2023-11-26 20:32:50',
      },
      {
          residentName: "Jennifer R",
          type:"Owner",
          isOfficeBearer:0,
          createdAt:'2023-11-26 20:32:50',
      }
     ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Residents', null, {});
  }
};
