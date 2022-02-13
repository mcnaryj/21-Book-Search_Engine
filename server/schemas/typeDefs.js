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
      bookCount: Int
    
    }
    type Auth {
      token: ID
      me: User
  }

    type Query {
      getSingleUser: User
  }

    # shorthand for the saveBook mutation
    input BookInfo {
      bookId: ID!
      authors: [String]
      description: String!
      image: String
      link: String
      title: String! 
  }


    type Mutation {
      createUser(
      username: String!
      email: String!
      password: String!
      ): Auth
      saveBook(bookInfo: BookInfo!): User
      deleteBook(: ID!): User
      login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;


