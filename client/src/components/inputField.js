import React from "react";
import { Input, FormControl, FormLabel } from "@chakra-ui/react";

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
