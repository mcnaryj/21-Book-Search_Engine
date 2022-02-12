const { gql } = require('apollo-server-express');



const typeDefs = gql`
    type Book {
      bookId: ID!
      authors: [String]
      description: String!
      image: String
      link: String
      title: String!
    }

    type User {
      _id: ID!
      username: String!
      email: String!
      password: String!
      saveBooks: [Book]
    
    }
    type Auth {
    token: ID
    user: User
  }

type Query

input BookINput

type Mutation
`;

module.exports = typeDefs;


