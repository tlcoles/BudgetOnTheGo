import React from "react";

const ExpenseItem = (props) => {
  return (
    <li>
      {/* this would have to come from input */}
      {props.item}
      <div>
        {/* this would have to come from input */}
        <span>€{props.amount}</span>
      </div>
    </li>
  );
};

export default ExpenseItem;
