const db = require("../config/connection");
const { Expense, User } = require("../models");

const expenseData = require("./expenseSeeds.json");
const userData = require("./userSeeds.json");

db.once("open", async () => {
  // clean database
  await User.deleteMany({});
  await Expense.deleteMany({});

  // bulk create each model
  const users = await User.insertMany(userData);
  const expenses = await Expense.insertMany(expenseData);

  // users.forEach()
  // console.log(expenses);

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
