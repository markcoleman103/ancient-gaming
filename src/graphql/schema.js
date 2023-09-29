const typeDefs = `#graphql
    type User {
        id: Int!
        name: String!
        balance: Float!
    }
    type Bet {
        id: Int!
        userId: Int!
        betAmount: Float!
        chance: Float!
        payout: Float!
        win: Boolean!
    }
    type Query {
        getBetList: [Bet]
        getBet(id: Int!): Bet
        getUserList: [User]
        getUser(id: Int!): User
        getBestBetPerUser(limit: Int!): [Bet]
    }
    type Mutation {
        createBet(bet: CreateBetInput!): Bet
    }
    input CreateBetInput {
        userId: Int!
        betAmount: Float!
        chance: Float!
    }
`
exports.typeDefs = typeDefs