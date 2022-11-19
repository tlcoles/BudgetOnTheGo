import React, { useState } from "react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import HeadingH1Component from "../components/Heading";
import InputField from "../components/InputField";
import GeneralButton from "../components/GeneralButton";
import { Select } from "chakra-react-select";
import { useMutation } from "@apollo/client";

//! import ADD_EXPENSE when defined.
// import { ADD_EXPENSE } from "../utils/mutations";


const AddExpensePage = () => {

  const [formState, setFormState] = useState({
    item: "",
    amount: "",
    categories: "",
  });

  //! remove comments below when ADD_EXPENSE has been defined in mutations.js
  // const [addExpense, { error, data }] = useMutation(ADD_EXPENSE);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSelectChange = (data) => {
    setFormState({
      ...formState,
      ["categories"]: data.value,
    });
  };

  const heading = "Add your expense";

  const categories = [
    { value: "Food & Drink", label: "Food & Drink", color: "#0052CC" },
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
      const { data } = await addExpense({
        variables: { ...formState },
      });

    } catch (error) {
      console.error(error);
    }

    // clear form values
    setFormState({
      item: "",
      amount: "",
      categories: "",
    });
  };

  return (
    <div>
      <HeadingH1Component heading={heading} />
      <form onSubmit={handleFormSubmit}>
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
          name={"amount"}
          type={"number"}
          placeholder={"5.00"}
          onChange={handleChange}
        />
        <Select
          name="categories"
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
          onClick={handleChange}
          type={"submit"}
          buttonTitle={"Submit"}
        />
      </form>
    </div>
  );
};

export default AddExpensePage;