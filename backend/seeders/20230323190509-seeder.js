'use strict';

const { Employees, Users, Positions } = require('../dummyData');

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
   await queryInterface.bulkInsert('Positions', Positions, {});
    await queryInterface.bulkInsert('Users', Users, {});
    await queryInterface.bulkInsert('Employees', Employees, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
    */
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Positions', null, {});
    await queryInterface.bulkDelete('Employees', null, {});
  }
};
