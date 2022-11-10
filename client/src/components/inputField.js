import React from "react";
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

const InputField = (props) => {
  return (
    <>
      <FormControl isRequired>
        <FormLabel>{props.placeholder}</FormLabel>
        <Input
          focusBorderColor="#86BBD8"
          type="email"
          placeholder={props.placeholder}
        />
      </FormControl>
    </>
  );
};

export default InputField;
