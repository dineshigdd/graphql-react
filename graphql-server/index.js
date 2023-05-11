import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// A schema is a collection of type definitions 
const typeDefs = `
type Author {
  id: ID!
  name: String! # returns a String and non-nullable
  books: [Book!]!# A list of Books 
  age:Int
}

type Book {
  id: ID!
  title: String!
  author: Author! # returns an Author
}

type Query {
  authors: [Author!]!
  author(id: ID!): Author!
  books: [Book!]!
  book(id: ID!): Book!
}
`;

//sample dataset. We will fetch data from these array of objects
const authors = [
  { id: "1", name: "J.K. Rowling" , age:null},
  { id: "2", name: "Stephen King",age : 75 },
  { id: "3", name: "Haruki Murakami",age:74 },
];

const books = [
  { id: "1", title: "Harry Potter and the Philosopher's Stone", authorId: "1" },
  { id: "2", title: "The Shining", authorId: "2" },
  { id: "3", title: "1Q84", authorId: "3" },
];


// Resolvers define how to fetch the types defined in your schema.
const resolvers = {
  // Define resolvers for queries
  Query: {
    // Return all books
    books: () => books,
    // Find a book by ID and return it
    book: (parent, args) => books.find(book => book.id === args.id),
    // Return all authors
    authors: () => authors,
    // Find an author by ID and return them
    author: (parent, args) => authors.find(author => author.id === args.id)
  },
  // Define resolvers for Author type fields
  Author: {
    // Return all books written by the author
    books: (parent) => books.filter(book => book.authorId === parent.id)
  },
  // Define resolvers for Book type fields
  Book: {
    // Return the author of the book
    author: (parent) => authors.find(author => author.id === parent.authorId)
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