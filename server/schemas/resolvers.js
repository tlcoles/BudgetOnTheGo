const { Expense, User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    //! see expenses for a given logged in user
    expenses: async () => {
      return await Expense.find({}).populate("user");
    },
    users: async () => {
      return await User.find({}).populate("expense");
    },
    //! another query for the profile info (PASSWORD IS OPTIONAL)
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("expenses");
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("expenses");
      }
      throw new AuthenticationError("You need to be logged in!");
    }, //! Check with Tudor
  },

  Mutation: {
    addUser: async (parent, { username, email, password, budget }) => {
      const user = await User.create({ username, email, password, budget });
      const token = signToken(user);
      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return User.findByIdAndUpdate(context.user.id, args, {
          new: true,
        });
      }
      throw new AuthenticationError("Not logged in");
    },

    login: async (parent, { username, password }) => {
      //! add email validation //! Check with Tudor
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },

    //! Context needed?
    addExpense: async (parent, { item, category, amount, userId }) => {
      const expense = await Expense.create({ item, category, amount, userId });

      await User.findOneAndUpdate(
        { _id: userId },
        { $addToSet: { expenses: expense._id } }
      );
      return expense;
    },
  },

  Mutation: {
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError("No user found with this username");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
