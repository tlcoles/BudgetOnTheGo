const db = require("../config/connection");
const { Expense, User } = require("../models");

const expenseData = require("./expenseSeeds.json");
const userData = require("./userSeeds.json");

db.once("open", async () => {
  // clean database
  await User.deleteMany({});
  await Expense.deleteMany({});

  // bulk create each model
  const promises = userData.map((user) => User.create(user));
  await Promise.all(promises);

  const users = await User.find({});

  const expenses = await Expense.insertMany(expenseData);

  for (newExpense of expenses) {
    // select a random user from users array
    const tempUser = users[Math.floor(Math.random() * users.length)];
    //push current expense to selected user's expenses
    tempUser.expenses.push(newExpense._id);
    //save the updated user
    await tempUser.save();

    //add selected user's id to current expense
    newExpense.user = tempUser._id;
    //save the expense
    await newExpense.save();
  }

  console.log("all done!");
  process.exit(0);
});
