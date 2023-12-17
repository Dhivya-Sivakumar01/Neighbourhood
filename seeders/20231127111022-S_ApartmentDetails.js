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
    await queryInterface.bulkInsert('ApartmentDetails', [
      {
          apartmentId: 1,
          blockNumber:"A1",
          doorNumber:"1",
          ownerId:1,
          tenantId:1,
          createdAt:'2023-10-26 20:32:50',
      },
      {
        apartmentId: 1,
        blockNumber:"A1",
        doorNumber:"2",
        ownerId:2,
        tenantId:2,
        createdAt:'2023-10-26 20:32:50',
      },
      {
        apartmentId: 1,
        blockNumber:"A2",
        doorNumber:"1",
        ownerId:3,
        tenantId:3,
        createdAt:'2023-10-26 20:32:50',
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
    await queryInterface.bulkDelete('ApartmentDetails', null, {});
  }
};
