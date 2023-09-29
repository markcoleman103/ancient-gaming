import db from './_db.js'

export const Query = {
    users() {
        return db.users
    },
    user(parent, args, context) {
        return db.users.find((item) => item.id === args.id)
    },
    bets() {
        return db.bets
    },
    bet(parent, args, context) {
        return db.bets.find((item) => item.id === args.id)
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
