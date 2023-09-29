'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('bets', [
      { id: 1, userId: 1, betAmount: 2.0, chance: 0.5, payout: 3.0, win: true, createdAt: new Date(), updatedAt: new Date() },
      { id: 2, userId: 2, betAmount: 4.0, chance: 0.5, payout: 6.0, win: true, createdAt: new Date(), updatedAt: new Date() },
      { id: 3, userId: 1, betAmount: 10.0, chance: 0.5, payout: 15.0, win: true, createdAt: new Date(), updatedAt: new Date() },
      { id: 4, userId: 1, betAmount: 10.0, chance: 0.5, payout: 1.0, win: true, createdAt: new Date(), updatedAt: new Date() },
      { id: 5, userId: 1, betAmount: 10.0, chance: 0.5, payout: 40.0, win: true, createdAt: new Date(), updatedAt: new Date() },
      { id: 6, userId: 3, betAmount: 10.0, chance: 0.5, payout: 20.0, win: true, createdAt: new Date(), updatedAt: new Date() },
      { id: 7, userId: 2, betAmount: 10.0, chance: 0.5, payout: 2.0, win: true, createdAt: new Date(), updatedAt: new Date() }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bets', null, {});
  }
};
