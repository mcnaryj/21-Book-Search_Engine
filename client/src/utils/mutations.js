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
}

`
// we want SAVE_BOOK, where we use savedBooks and BookIinfo



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