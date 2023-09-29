'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('bets', [
      {  userId: 1, betAmount: 2.0, chance: 0.5, payout: 3.0, win: true, createdAt: new Date(), updatedAt: new Date() },
      {  userId: 2, betAmount: 4.0, chance: 0.5, payout: 6.0, win: true, createdAt: new Date(), updatedAt: new Date() },
      {  userId: 1, betAmount: 10.0, chance: 0.5, payout: 15.0, win: true, createdAt: new Date(), updatedAt: new Date() },
      { userId: 1, betAmount: 10.0, chance: 0.5, payout: 1.0, win: true, createdAt: new Date(), updatedAt: new Date() },
      { userId: 1, betAmount: 10.0, chance: 0.5, payout: 40.0, win: true, createdAt: new Date(), updatedAt: new Date() },
      {userId: 3, betAmount: 10.0, chance: 0.5, payout: 20.0, win: true, createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, betAmount: 10.0, chance: 0.5, payout: 2.0, win: true, createdAt: new Date(), updatedAt: new Date() }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('bets', null, {})
};
