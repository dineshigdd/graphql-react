import { gql } from 'apollo-server-express';
// A schema is a collection of type definitions 
const typeDefs = gql`
type Author {
  id: ID!
  name: String! # returns a String and non-nullable 
  age:Int
  books(limit: Int = 3 ): [Book!]# A list of Books 
  #deleteBook( authorId: ID!):Book!
}

type Book {
  id: ID!
  title: String!
  publicationDate: String
  authorId: ID!
}

type Query {
  authors: [Author!]!
  author(id: ID!): Author!
  books:[Book!]!
}

input AuthorInput{
   name: String!
   age:Int  
}

type Mutation {
  createAuthor( input: AuthorInput!): Author!

 #feel free to add resolvers for update and delete
 # updateAuthor(id: ID!, name: String, age: Int): Author! 
 deleteAuthor(id: ID!): Author!
 deleteBook( id: ID!):Book!
 deleteBookByAuthorID( authorId:ID!):[Book!]!
}
`;

module.exports = typeDefs ;