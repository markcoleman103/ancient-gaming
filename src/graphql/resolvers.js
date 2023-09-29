// import db from '../../database/_db.js'

const { user, bet } = require('../../database/models/index.js')
console.log('user', user)
// import db from '../../database/models'
// db.sequelize.sync().then(() => {
    
// })
// console.log('User', User)

const Query = {
    async getUserList() {

        const results = await user.findAll()
        console.log('results', results)
        return results
    },
    async getUser(parent, args, context) {
        return await user.findOne({ where: { id: args.id }})
        // return db.users.find((item) => item.id === args.id)
    },
    async getBetList() {
        return await bet.findAll()
    },
    async getBet(parent, args, context) {
        return await bet.findOne({ where: { id: args.id }})
    },
    async getBestBetPerUser(parent, args, context) {
        let topBets = [];
        const winningBets = db.bets.filter((bet) => bet.win)
        for(const winningBet of winningBets) {
            let existingTopBetIndex = topBets.findIndex((topBet) => topBet.userId === winningBet.userId);
            let existingTopBet = topBets[existingTopBetIndex]
            if (!existingTopBet) {
                topBets.push(winningBet)
            } else if (existingTopBet.payout < winningBet.payout) {
                topBets[existingTopBetIndex] = winningBet
            }
        }
        if (args.limit && args.limit > 0) {
            topBets = topBets.slice(0, args.limit)
        }
        return topBets
    },
}

const Mutation = {
    async createBet(parent, args, context) {
        let bet = {
            ...args.bet,
            id: Math.floor(Math.random() * 10000).toString(),
            win: false,
            payout: 0
        }

        // const user = db.users.find((user) => user.id === args.bet.userId)
        const bestUser = await user.findOne({ where: { id: args.bet.userId }})

        // if(user.balance < args.bet.betAmount) {
        //     throw "Not enough balance remaining"
        // }

        bet.payout = args.bet.betAmount + ((1 - args.bet.chance) * args.bet.betAmount)

        bestUser.balance = bestUser.balance - args.bet.betAmount;

        if (Math.random() < args.bet.chance) {
            bet.win = true
            // user.balance = user.balance + bet.payout
            await user.update(
                { balance: bestUser.balance + bet.payout },
                { id: args.bet.userId }
            )
        }

        // db.bets.push(bet)
        
        let newBet = await bet.create(bet)
        return newBet
    }
}

module.exports = { Query, Mutation }