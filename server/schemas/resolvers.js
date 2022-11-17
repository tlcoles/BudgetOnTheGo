const { Expense } = require("../models");

const resolvers = {
  Query: {
    expenses: async () => {
      return Expense.find();
    },
  },
};

module.exports = resolvers;
