import React from "react";
import { Input, FormControl, FormLabel } from "@chakra-ui/react";

const InputFieldNotReq = (props) => {
  return (
    <>
      <FormControl>
        <FormLabel>{props.label}</FormLabel>
        <Input
          value={props.value}
          name={props.name}
          onChange={props.onChange}
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

export default InputFieldNotReq;
