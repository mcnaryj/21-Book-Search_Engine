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

    type Query {
      getSingleUser: User
  }



    type Mutation {
      createUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
      saveBook(
      bookId: ID!, authors: [String], description: String!, image: String, link: String, title: String!
      ): Book
      deleteBook: ID!
      login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;


