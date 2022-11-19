import { gql } from "@apollo/client";

export const QUERY_EXPENSES = gql`
  query expenses {
    expenses {
      _id
      amount
      category
      createdAt
      item
      user {
        _id
      }
    }
  }
`;

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
      password
      budget
      expenses {
        _id
        item
        category
        amount
        createdAt
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      password
      email
      budget
      expenses {
        _id
        item
        category
        amount
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      password
      budget
      expenses {
        _id
        item
        category
        amount
        createdAt
      }
    }
  }
`;
