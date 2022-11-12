import React from "react";
import { Input, FormControl, FormLabel } from "@chakra-ui/react";

//comment for usage in parent element is below

const InputField = (props) => {
  const handleChange = (event) => {
    return props.setValue(event.target.value);
  };

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
