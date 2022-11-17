const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    budget: Int
    expenses: [Expense]
  }
  type Expense {
    _id: ID
    item: String
    category: String
    amount: Float
    createdAt: String
    user: User
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    expenses: [Expense]
  }
  type Mutation {
    addUser(
      username: String!
      email: String!
      password: String!
      budget: Int!
    ): Auth
    updateUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addExpense(item: String!, category: String!, amount: Float!): Expense
  }
`;

module.exports = typeDefs;
