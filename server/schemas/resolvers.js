const { Expense } = require("../models/Expense");

const resolvers = {
  Query: {
    expenses: async () => {
      return Expense.find({});
    },
  },
};

module.exports = resolvers;
