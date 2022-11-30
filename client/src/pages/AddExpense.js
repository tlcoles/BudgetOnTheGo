/* eslint-disable indent */
import React from "react";
import HeadingH1Component from "../components/Heading";
import InputField from "../components/InputField";
import GeneralButton from "../components/GeneralButton";
import { Select } from "chakra-react-select";
import { useMutation } from "@apollo/client";

//! import ADD_EXPENSE when defined.
import { ADD_EXPENSE } from "../utils/mutations";

const AddExpensePage = () => {
  const [item, setItem] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [category, setCategory] = React.useState("");

  const [addExpense] = useMutation(ADD_EXPENSE);

  // submit form
  // eslint-disable-next-line no-unused-vars
  const handleSubmit = async () => {
    console.log(item, amount, category);
    // eslint-disable-next-line no-unused-vars
    const { data } = await addExpense({
      variables: { item, amount: parseInt(amount), category },
    });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "item":
        return setItem(value);
      case "amount":
        return setAmount(value);
      default:
        return; // adding a default case protects your code against unexpected behaviour and should be added even if its empty.
    }
  };

  const handleSelectChange = (data) => {
    return setCategory(data.value);
  };

  const heading = "Add your expense";

  const categories = [
    { value: "Food & Drink", label: "Food & Drink", color: "#0052CC" },
    { value: "Travel", label: "Travel", color: "#5243AA" },
    { value: "Entertainment", label: "Entertainment", color: "#FF5630" },
    { value: "Home", label: "Home", color: "#FF5630" },
    { value: "Other", label: "Other", color: "#FF5630" },
  ];

  return (
    <div>
      <HeadingH1Component heading={heading} />
      <InputField
        label={"Item"}
        value={item}
        name={"item"}
        type={"text"}
        placeholder={"Breakfast"}
        onChange={handleChange}
      />
      <InputField
        label={"Amount"}
        value={amount}
        name={"amount"}
        type={"number"}
        placeholder={"5.00"}
        onChange={handleChange}
      />
      <Select
        name="category"
        placeholder="Select a category"
        className="chakra-react-select"
        classNamePrefix="chakra-react-select"
        options={categories}
        selectedOptionStyle="check"
        onChange={handleSelectChange}
        chakraStyles={{
          dropdownIndicator: (provided) => ({
            ...provided,
            bg: "transparent",
            px: 2,
            cursor: "inherit",
          }),
          indicatorSeparator: (provided) => ({
            ...provided,
            display: "none",
          }),
        }}
      />
      <GeneralButton
        handleClick={handleSubmit}
        type={"submit"}
        buttonTitle={"Submit"}
      />
    </div>
  );
};

export default AddExpensePage;
