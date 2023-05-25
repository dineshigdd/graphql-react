// import express from 'express';
// import { ApolloServer } from 'apollo-server-express';
// import { typeDefs } from './graphql/schema';
// import { resolvers } from './graphql/resolvers';

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./graphql/typeDefs')
const { resolvers } = require('./graphql/resolvers');




// import { startStandaloneServer } from '@apollo/server/standalone';


const app = express();
// The ApolloServer constructor takes two parameters: the schema and the resolvers you created

const startSever = async()=> {
        const server = new ApolloServer({
          typeDefs,
          resolvers,
        });

        await ApolloServer.start()
        //configure express server
        server.applyMiddleware({ "app":app })


        app.listen({ port: 4000 }, () => {
          console.log(`Server running at http://localhost:4000${server.graphqlPath}`);
        });
}

startSever();
// Passing an ApolloServer instance to the `startStandaloneServer` function.
// start the server at port 4000 on localhost
// const { url } = await startStandaloneServer(server, {
//   listen: { port: 4000 },
// });

// console.log(`Server starts at: ${url}`);