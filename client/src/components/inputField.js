import React from "react";
import { Input, FormControl, FormLabel } from "@chakra-ui/react";

const InputField = (props) => {
  return (
    <>
      <FormControl isRequired>
        <FormLabel>{props.label}</FormLabel>
        <Input
          focusBorderColor="#86BBD8"
          type={props.type}
          placeholder={props.placeholder}
          width="auto"
          value={props.value}
          onChange={props.handleChange}
        />
      </FormControl>
    </>
  );
};

export default InputField;
