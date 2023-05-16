import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// A schema is a collection of type definitions 
const typeDefs = `
type Author {
  id: ID!
  name: String! # returns a String and non-nullable
  books(limit: Int = 3 ): [Book!]!# A list of Books 
  age:Int
}

type Book {
  id: ID!
  title: String!
  publicationDate: String
}

type Query {
  authors: [Author!]!
  author(id: ID!): Author!
}

type Mutation {
  createAuthor(name: String!, age: Int): Author!

 #feel free to add resolvers for update and delete
 # updateAuthor(id: ID!, name: String, age: Int): Author! 
 # deleteAuthor(id: ID!): Author!
}
`;

//sample dataset. We will fetch data from these array of objects
const authors = [
  { id: "A1", name: "J.K. Rowling" , age:null}, 
  { id: "A2", name: "Stephen King",age : 75 },
  { id: "A3", name: "Haruki Murakami",age:74 },
  
];

const books = [
  { id: "B1", title: "Harry Potter and the Philosopher's Stone", authorId: "A1" },
  { id: "B2", title: "The Shining", authorId: "A2" },
  { id: "B3", title: "1Q84", authorId: "A3" },
  { id: "B4", title: "The Stand", authorId: "A2" },
  { id: "B5", title: "Norwegian Wood", authorId: "A3" },
  { id: "B6", title: "The Green Mile", authorId: "A2" }
];


// Resolvers define how to fetch the types defined in your schema.
const resolvers = {
  // Define resolvers for queries
  Query: {
    
    authors: () => authors,
    // Find an author by ID and return them
    author: (parent, args) => authors.find(author => author.id === args.id)
  },
  // Define resolvers for Author type fields
  Author: {
  // Return all books written by the author 
    books: (parent , args ) => {
      console.log( parent )
      return books.filter(book => book.authorId === parent.id).slice( 0, args.limit )
    }
  },
 


  Mutation: {
    createAuthor: (parent, args) => {
   
      const newAuthor = {
        id: "A"+  ( authors.length + 1 ),
        name: args.name,
        age: args.age,
        books: []
      };
      authors.push(newAuthor);
      return newAuthor;
    }
  }
};


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