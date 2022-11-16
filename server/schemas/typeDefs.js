const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
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
    expenses: [Expense] //! is this enough for 30/7/1 queries? 
  }

  type Mutation {
    addUser(
      username: String!
      email: String!
      password: String!
      budget: Number!
    ): Auth
    updateUser(
      username: String!
      email: String!
      password: String!
      budget: Number! //! Can we change username, email, password without changing budget?
    ): Auth
    login(email: String!, password: String!): Auth
    addExpense(item: String!, category: String!, amount: Number!): Expense
  }
`;

module.exports = typeDefs;
