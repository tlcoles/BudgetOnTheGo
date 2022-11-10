import React from "react";
import { Input, FormControl, FormLabel } from "@chakra-ui/react";

const InputField = (props) => {
  return (
    <>
      <FormControl isRequired>
        <FormLabel>{props.label}</FormLabel>
        <Input
          focusBorderColor="#86BBD8"
          type={props.type} //e.g. email or text
          placeholder={props.placeholder}
        />
      </FormControl>
    </>
  );
};

export default InputField;
