import React from "react";
import { Button } from "@chakra-ui/react";

const GeneralButton = (props) => {
  console.log(props);
  return (
    <Button
      colorScheme="blue"
      color="#F9F0F6"
      minWidth="20%"
      onClick={props.handleClick}
    >
      {props.buttonTitle}
    </Button>
  );
};

export default GeneralButton;
