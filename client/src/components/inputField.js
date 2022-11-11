import React from "react";
import { Input, FormControl, FormLabel } from "@chakra-ui/react";

//comment for usage in parent element is below

const InputField = (props) => {
  const handleChange = (event) => props.setValue(event.target.value);

  console.log(props);
  return (
    <>
      <FormControl isRequired>
        <FormLabel>{props.label}</FormLabel>
        <Input
          value={props.value}
          onChange={handleChange}
          focusBorderColor={"highlight"}
          type={props.type}
          placeholder={props.placeholder}
          width="auto"
        />
      </FormControl>
    </>
  );
};

export default InputField;

{
  /*
  !Usage in the parent element demonstrated here with App.js:
  const App = () => {
  !Use this to set the state for the needed props
  const [email, setValue] = React.useState("");
  const [pw, setEmail] = React.useState("");

  return (
    <ChakraProvider theme={budgetTheme}>
      <Home name="BudgetOnTheGo user" />
      <InputField
        label="Email"
        type="email"
        placeholder="example@email.com"
        value={email}
        setValue={setValue}
      />
      <InputField
        label="Password"
        type="password"
        placeholder="examplePassword"
        value={pw}
        setValue={setEmail}
      />
    </ChakraProvider>
  );
};

!read more here, if needed: https://chakra-ui.com/docs/components/form-control
  */
}
