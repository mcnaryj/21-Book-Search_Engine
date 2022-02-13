import { gql } from '@apollo/client';

// We want to get the user info

export const GET_USER = gql`
{
  me {
    _id
    username
    email
    password
    bookCount
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