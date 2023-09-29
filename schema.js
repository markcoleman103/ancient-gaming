export const typeDefs = `#graphql
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
        bets: [Bet]
        bet(id: ID!): Bet
        users: [User]
        user(id: ID!): User
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