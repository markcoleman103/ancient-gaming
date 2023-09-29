const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')

//types
const { typeDefs } = require('./graphql/schema.js')
const { Query, Mutation } = require('./graphql/resolvers.js')

const db = require('../database/models/index.js')
 
//server set up
const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Mutation
    }
})

db.sequelize.sync().then(async () => {
    
    startStandaloneServer(server, {
        listen: { port: 4000 }
    }).then((url) => {
        console.log('Server ready at port', 4000)
    });
})
