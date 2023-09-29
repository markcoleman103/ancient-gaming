import db from './_db.js'

export const Query = {
    getUserList() {
        return db.users
    },
    getUser(parent, args, context) {
        return db.users.find((item) => item.id === args.id)
    },
    getBetList() {
        return db.bets
    },
    getBet(parent, args, context) {
        return db.bets.find((item) => item.id === args.id)
    },
    getBestBetPerUser(parent, args, context) {
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

export const Mutation = {
    createBet(parent, args, context) {
        let game = {
            ...args.game,
            id: Math.floor(Math.random() * 10000).toString()
        }
        db.games.push(game)
        return game
    }
}
