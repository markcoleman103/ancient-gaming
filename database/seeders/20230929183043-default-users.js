'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      id: 1,
      name: 'John Smith', 
      balance: 70.0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      name: 'Mike Jones', 
      balance: 200.0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      name: 'David Moyes', 
      balance: 100.0,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
