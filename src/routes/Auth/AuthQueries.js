import { gql } from "apollo-boost";

export const LOGIN = gql`
  mutation signInUser($email: String!, $password: String!) {
    signInUser(email: $email, password: $password) {
      token
      user {
        id
        username
        email
      }
    }
  }
`;

export const LOCAl_LOG_IN = gql`
  mutation logUserIn($token: String!, $user: String!) {
    logUserIn(token: $token, user: $user) @client
  }
`;

export const SET_LOGOUT_USER_INFO = gql`
  mutation logUserOut {
    logUserOut @client
  }
`;
