import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './graphql/typeDef.js';
import { resolvers } from './graphql/resolvers.js';
import mongoose from 'mongoose';



// The ApolloServer constructor takes two parameters: the schema and the resolvers you created 
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function.
// start the server at port 4000 on localhost
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server starts at: ${url}`);