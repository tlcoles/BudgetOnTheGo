import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const expenses = [
    { name: "shopping", cost: 40 },
    { name: "holiday", cost: 400 },
    { name: "car service", cost: 50 },
  ];

  return (
    <ul>
      {expenses.map((expense) => (
        <ExpenseItem name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
};

export default ExpenseList;
