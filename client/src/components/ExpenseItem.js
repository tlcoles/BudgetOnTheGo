import React from "react";

const ExpenseItem = (props) => {
  return (
    <li>
      {/* this would have to come from input */}
      {props.name}
      <div>
        {/* this would have to come from input */}
        <span>€{props.cost}</span>
      </div>
    </li>
  );
};

export default ExpenseItem;
