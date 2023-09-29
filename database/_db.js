let users = [
    { id: 1, name: 'John Smith', balance: 10.0 },
    { id: 2, name: 'Mike Jones', balance: 20.0 },
    { id: 3, name: 'Ian Spiteri', balance: 5.0 },
]

let bets = [
    { id: 1, userId: 1, betAmount: 2.0, chance: 0.5, payout: 3.0, win: true },
    { id: 2, userId: 2, betAmount: 4.0, chance: 0.5, payout: 6.0, win: true },
    { id: 3, userId: 1, betAmount: 10.0, chance: 0.5, payout: 15.0, win: true },
    { id: 4, userId: 1, betAmount: 10.0, chance: 0.5, payout: 1.0, win: true },
    { id: 5, userId: 1, betAmount: 10.0, chance: 0.5, payout: 40.0, win: true },
    { id: 6, userId: 3, betAmount: 10.0, chance: 0.5, payout: 20.0, win: true },
    { id: 7, userId: 2, betAmount: 10.0, chance: 0.5, payout: 2.0, win: true },
]

export default { users, bets }