'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'Colors',
      [
        {
          name: 'purple',
          createdAt: new Date('2024-10-19 09:44:33'),
          updatedAt: new Date('2024-10-19 09:44:33'),
        },
        {
          name: 'orange',
          createdAt: new Date('2024-10-19 09:44:33'),
          updatedAt: new Date('2024-10-19 09:44:33'),
        },
        {
          name: 'green',
          createdAt: new Date('2024-10-19 09:44:33'),
          updatedAt: new Date('2024-10-19 09:44:33'),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(
      'Colors',
      { name: ['purple', 'orange', 'green'] },
      {}
    );
  },
};
