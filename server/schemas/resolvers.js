const { Expense, User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const resolvers = {
  Query: {
    //! see expenses for a given logged in user
    expenses: async () => {
      return await Expense.find({}).populate("user");
    },
    expense: async (parent, { expenseId }) => {
      return Expense.findOne({ _id: expenseId });
    },
    users: async () => {
      return await User.find({}).populate("expenses");
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
    },
    aggregatedPersonalChart: async (parent, args, context) => {
      if (context.user) {
        const data = await Expense.aggregate([
          {
            $match: {
              user: ObjectId(context.user._id),
            },
          },
          {
            $group: {
              _id: "$category",
              amount: { $sum: "$amount" },
            },
          },
        ]);
        console.log(data);
        return data;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password, budget }) => {
      const user = await User.create({ username, email, password, budget });
      const token = signToken(user);
      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        const { username, password, email } = args;
        let newUserData;

        newUserData = {
          username,
          email,
          password: password ? await bcrypt.hash(args.password, 10) : undefined,
        };

        return User.findByIdAndUpdate(context.user._id, newUserData, {
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

    addExpense: async (parent, { item, category, amount }, context) => {
      try {
        if (!context.user)
          throw new AuthenticationError("You are not logged in");
        const expense = await Expense.create({
          item,
          category,
          amount,
          user: context.user._id,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { expenses: expense._id } }
        );
        return expense;
      } catch (error) {
        console.error(error.message);
      }
    },
  },
};

module.exports = resolvers;
