import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation createUser($username: String!, $email: String!, $password: String!, ) {
    token
    user {
      _id
      username
      }
    }
  }
`;
// we want SAVE_BOOK, where we use savedBooks and BookIinfo
export const ADD_BOOK = gql`
  mutation saveBook(bookId: ID!) {
    saveBook(bookId: $bookId) {
      _id
      username
      email
      savedBooks {
        authors
        bookId
        description
        image
        link
        title
      }
    }
  }
`;

// REMOVE_BOOK, where we delete the book based on its id
export const REMOVE_BOOK = gql`
  mutation deleteBook(bookId: ID!) {
    deleteBook(bookId: $bookId) {
      _id
      username
      email
      savedBooks {
        authors
        bookId
        description
        image
        link
        title
      }
    }
  }
`;
// Which is also going to contain the info in saved books


// LOGIN_USER
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;