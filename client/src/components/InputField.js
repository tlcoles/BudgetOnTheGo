import React from "react";
import { Input, FormControl, FormLabel } from "@chakra-ui/react";

const InputField = (props) => {

  console.log(props);
  return (
    <>
      <FormControl isRequired>
        <FormLabel>{props.label}</FormLabel>
        <Input
          focusBorderColor={"highlight"}
          type={props.type}
          placeholder={props.placeholder}
          my={5}
          width="auto"
        />
      </FormControl>
    </>
  );
};

export default InputField;
