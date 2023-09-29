const { user, bet } = require('../../database/models/index.js')
console.log('user', user)

const Query = {
    // Returns a list of all users
    async getUserList() {
        const results = await user.findAll()
        return results
    },
    // Returns a single of user which matches the id parameter
    async getUser(parent, args, context) {
        return await user.findOne({ where: { id: args.id }})
    },
    // Returns a list of all bets
    async getBetList() {
        return await bet.findAll()
    },
    // Returns a single of bet which matches the id parameter
    async getBet(parent, args, context) {
        return await bet.findOne({ where: { id: args.id }})
    },
    // Returns a list of the best bets (highest payout) per user
    async getBestBetPerUser(parent, args, context) {
        let topBets = [];
        const winningBets = await bet.findAll({ where: { win: true }})
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
    // Creates a new user (for testing as the seeders weren't working for me)
    async createUser(parent, args, context) {
        let newUser = {
            ...args.user,
            id: Math.floor(Math.random() * 10000).toString()
        }
        return await user.create(newUser)
    },
    // Creates a new bet and calculates if it is a win based on the odds. It will also adjust the balance of the user based on the result.
    async createBet(parent, args, context) {
        let newBet = {
            ...args.bet,
            id: Math.floor(Math.random() * 10000).toString(),
            win: false,
            payout: 0
        }

        const bestUser = await user.findOne({ where: { id: args.bet.userId }})

        // if(user.balance < args.bet.betAmount) {
        //     throw "Not enough balance remaining"
        // }

        newBet.payout = args.bet.betAmount + ((1 - args.bet.chance) * args.bet.betAmount)
        bestUser.balance = bestUser.balance - args.bet.betAmount;

        if (Math.random() < args.bet.chance) {
            newBet.win = true
            user.balance = user.balance + newBet.payout
            await user.update(
                { balance: bestUser.balance + newBet.payout },
                { where: { id: args.bet.userId } }
            )
        }

        return await bet.create(newBet)
    }
}

module.exports = { Query, Mutation }