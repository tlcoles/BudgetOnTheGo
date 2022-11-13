import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const expenses = [
    { item: "shopping", amount: 40 },
    { item: "holiday", amount: 400 },
    { item: "car service", amount: 50 },
  ];

  return (
    <ul>
      {expenses.map((expense) => (
        <ExpenseItem item={expense.item} amount={expense.amount} />
      ))}
    </ul>
  );
};

export default ExpenseList;
