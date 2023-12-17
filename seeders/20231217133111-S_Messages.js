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
    await queryInterface.bulkInsert('Messages', [
      {
        messageTitle:"It's party time!",
        description:"Invitation for all residents to join on 12/10/2023 @7pm. Let's get to know about each others",
        createdBy: 3,
        createdAt: null,
        type: "Announcement"
      },
      {
        messageTitle:"Join Us for a Potluck Extravaganza!",
        description:"We're hosting a potluck gathering and would love for you to join us.",
        createdBy: 3,
        createdAt: null,
        type: "Announcement"
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
    await queryInterface.bulkDelete('Messages', null, {});
  }
};
