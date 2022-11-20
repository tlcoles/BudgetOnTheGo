import { gql } from "@apollo/client";

//!Do we need the user data here?
export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
    $budget: Int!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
      budget: $budget
    ) {
      token
      user {
        _id
        username
        password
        email
        budget
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($username: String, $email: String, $password: String) {
    updateUser(username: $username, email: $email, password: $password) {
      username
      email
      password
    }
  }
`;

export const ADD_EXPENSE = gql`
  mutation addExpense($item: String!, $category: String!, $amount: Float!) {
    addExpense(item: $item, category: $category, amount: $amount) {
      _id
      item
      category
      amount
      createdAt
      user {
        _id
        username
        email
        budget
      }
    }
  }
`;
