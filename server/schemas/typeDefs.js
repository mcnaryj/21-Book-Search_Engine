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
      saveBooks: [Book]
      bookCount: Int
    
    }
    type Auth {
      token: ID
      user: User
  }

    type Query {
      me: User
  }

    # shorthand for the saveBook mutation
    input BookInfo {
      bookId: ID!
      title: String! 
      authors: [String]
      description: String!
      image: String
      link: String
  }


    type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: BookInfo!): User
    deleteBook(bookId: ID!): User
    login(email: String!, password: String!): Auth
}
`;

module.exports = typeDefs;


