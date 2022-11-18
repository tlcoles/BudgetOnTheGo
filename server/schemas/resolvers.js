const { Expense, User } = require("../models");

const resolvers = {
  Query: {
    //! see expenses for a given logged in user
    expenses: async () => {
      return await Expense.find({}).populate("user");
    },
    users: async () => {
      return await User.find({});
    },
    //! another query for the profile info (PASSWORD IS OPTIONAL)
    //! OPTIONAL QUERY
  },

  // Mutation: {
  //   addUser: async (parent, args) => {
  //     const user = await User.create(args);
  //     const token = signToken(user);

  //     return { token, user };
  //   },
  //   updateUser: async (parent, args, context) => {
  //     if (context.user) {
  //       return User.findByIdAndUpdate(context.user.id, args, {
  //         new: true,
  //       });
  //     }
  //     throw new AuthenticationError("Not logged in");
  //   },

  //   login: async (parent, { email, password }) => {
  //     //! add email validation
  //     const user = await User.findOne({ email });

  //     if (!user) {
  //       throw new AuthenticationError("Incorrect credentials");
  //     }

  //     const correctPw = await user.isCorrectPassword(password);

  //     if (!correctPw) {
  //       throw new AuthenticationError("Incorrect credentials");
  //     }

  //     const token = signToken(user);
  //     return { token, user };
  //   },

  //   addExpense: async (parent, { item, category, amount, userId }) => {
  //     const expense = await Expense.create({ item, category, amount, userId });

  //     await User.findOneAndUpdate(
  //       { _id: userId },
  //       { $addToSet: { expenses: expense._id } }
  //     );
  //     return expense;
  //   },
  // },
};

module.exports = resolvers;
