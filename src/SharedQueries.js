import { gql } from "apollo-boost";

export const ME = gql`
  {
    me {
      id
      email
      username
      personalInfo {
        id
      }
      companyInfo {
        id
      }
      address {
        address1
        address2
        addressZipcode
      }
    }
  }
`;

export const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;
