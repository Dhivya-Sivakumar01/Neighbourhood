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
    await queryInterface.bulkInsert('PaymentDetails', [
      {
        apartmentDetailsId:1,
        residentId:1,
        paymentDate:'2023-11-26 20:32:50',
      },
      {
        apartmentDetailsId:2,
        residentId:1,
        paymentDate:'2023-11-26 20:32:50',
      },
      {
        apartmentDetailsId:1,
        residentId:1,
        paymentDate:'2023-11-26 20:32:50',
      }
    ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('PaymentDetails', null, {});
  }
};
