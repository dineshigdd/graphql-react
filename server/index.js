// const express = require('express');
// const { ApolloServer } = require('apollo-server-express');
// const { typeDefs } = require('./graphql/typeDefs');
// const { resolvers } = require('./graphql/resolvers');





//  async function startSever (){

//         const app = express();

//         const apolloServer = new ApolloServer({
//           typeDefs,
//           resolvers,
//         });

//         await apolloServer.start()
//         //configure express server
//         apolloServer.applyMiddleware({ app })

//         app.use(( req, res ) =>{
//                 res.send("hello world")
//         })

//         app.listen({ port: 4000 }, () => {
//           console.log("Server running at http://localhost:4000");
//         });
// }

// startSever();

import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import  typeDefs from '../server/graphql/typeDefs.js'
import  resolvers  from '../server/graphql/resolvers.js'

// Construct a schema, using GraphQL schema language
// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `;

// Provide resolver functions for your schema fields
// const resolvers = {
//   Query: {
//     hello: () => 'Hello world!',
//   },
// };

 async function startSever (){

        const app = express();

        const apolloServer = new ApolloServer({
          typeDefs,
          resolvers,
        });

        await apolloServer.start()
        //configure express server
        apolloServer.applyMiddleware({ app })

        app.use(( req, res ) =>{
                res.send("hello")
        })

        app.listen({ port: 4000 }, () =>
               console.log(`🚀 Server ready at http://localhost:4000${ apolloServer.graphqlPath}`)
        );

}

startSever();