'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('users', [{
      name: 'John Smith', 
      balance: 70.0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Mike Jones', 
      balance: 200.0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'David Moyes', 
      balance: 100.0,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {}),
  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('users', null, {})
};
