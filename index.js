import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

//types
import { typeDefs } from './schema.js'
import { Query, Mutation } from './resolvers.js'

//server set up
const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Mutation
    }
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
});

console.log('Server ready at port', 4000)