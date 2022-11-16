const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    expenses: [Expense]!
  }

  type Expense {
    _id: ID
    item: String
    category: String
    amount: Number
    createdAt: String
    userId: ID
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
      budget: Number!
    ): Auth
    updateUser(
      username: String
      email: String
      password: String
    ): Auth
    login(email: String!, password: String!): Auth
    addExpense(item: String!, category: String!, amount: Number!): Expense
  }
`;

module.exports = typeDefs;
