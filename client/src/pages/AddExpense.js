import React from "react";
import { Select } from "@chakra-ui/react";
import InputField from "../components/InputField";
import GeneralButton from "../components/GeneralButton";

const AddExpensePage = () => {
  const [expenseItem, setExpenseItem] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [value, setValue] = React.useState("");

  const submit = () => {
    console.log(expenseItem);
    // in here we're not gonna clg the values bu actually make request to the api to log us in
  };

  return (
    <div>
      <InputField
        label={"Expense Item"}
        value={expenseItem}
        type={"text"}
        placeholder={"Breakfast"}
        setValue={setExpenseItem}
      />
      <InputField
        label={"Amount in €"}
        value={amount}
        type={"number"}
        placeholder={"5.00 €"}
        setValue={setAmount}
      />
      <Select
        placeholder="Select a category"
        focusBorderColor={"highlight"}
        variant="outline"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="Food & Drink">Food & Drink</option>
        <option value="Travel">Travel</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Home">Home</option>
        <option value="Other">Other</option>
      </Select>
      <GeneralButton buttonTitle={"Submit"} handleClick={submit} />
    </div>
  );
};

export default AddExpensePage;
