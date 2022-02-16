const { gql } = require('apollo-server-express');

const typeDefs = gql`
 
 type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

    type Book {
      bookId: ID!
      authors: [String]
      description: String!
      title: String!
      image: String
      link: String
  }

    type Auth {
      token: ID
      user: User
  }

    type Query {
      me: User
  }

    # shorthand for the saveBook mutation
    input BookInput {
      bookId: ID!
      title: String! 
      authors: [String]
      description: String!
      image: String
      link: String
  }


    type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: BookInput!): User
    deleteBook(bookId: ID!): User
    login(email: String!, password: String!): Auth
}
`;

module.exports = typeDefs;


