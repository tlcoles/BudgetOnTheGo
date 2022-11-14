import React from "react";
import {
  Input,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Flex,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

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
        <InputGroup size="md">
          <Flex justifyContent={"left"}>
            <Input
              value={props.value}
              onChange={handleChange}
              focusBorderColor={"highlight"}
              type={props.type}
              placeholder={props.placeholder}
              width="auto"
            />
            {props.show ? (
              <InputRightElement>
                <EditIcon />
              </InputRightElement>
            ) : (
              <></>
            )}
          </Flex>
        </InputGroup>
      </FormControl>
    </>
  );
};

export default InputField;
