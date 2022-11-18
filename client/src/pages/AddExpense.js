import React, { useState } from "react";
import { Select } from "@chakra-ui/react";
import HeadingH1Component from "../components/Heading";
import InputField from "../components/InputField";
import GeneralButton from "../components/GeneralButton";

const AddExpensePage = () => {
  // const [item, setItem] = React.useState("");
  // const [amount, setAmount] = React.useState("");
  // const [value, setValue] = React.useState("");

  // const submit = () => {
  //   console.log(expenseItem);
  //   // in here we're not gonna clg the values bu actually make request to the api to log us in
  // };

  const [formState, setFormState] = useState({
    item: "",
    amount: "",
    value: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const heading = "Add your expense";

  export const categories = [
    {value="Food & Drink", label: "Food & Drink", color: "#0052CC" },
    { value: "Travel", label: "Travel", color: "#5243AA" },
    { value: "Entertainment", label: "Entertainment", color: "#FF5630" },
    { value: "Home", label: "Home", color: "#FF5630" },
    { value: "Other", label: "Other", color: "#FF5630" },
  ];

    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
      try {
        const { data } = await login({
          variables: { ...formState },
        });
  
        Auth.login(data.login.token);
      } catch (error) {
        console.error(error);
      }
  
      // clear form values
      setFormState({
        username: "",
        password: "",
      });
    };

  return (
    <div>
      <HeadingH1Component heading={heading} />
      <InputField
        label={"Item"}
        value={formState.item}
        name={"item"}
        type={"text"}
        placeholder={"Breakfast"}
        onChange={handleChange}
      />
      <InputField
        label={"Amount"}
        value={formState.amount}
        name={"item"}
        type={"text"}
        placeholder={"5.00"}
        onChange={handleChange}
      />
      <Select
        name="categories"
        placeholder="Select a category"
        className="chakra-react-select"
        classNamePrefix="chakra-react-select"
        options={categories}
        onChange={handleChange}
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
        onClick={handleChange}
        type={"submit"}
        buttonTitle={"Log in"}
      />
    </div>
  );
};

export default AddExpensePage;
