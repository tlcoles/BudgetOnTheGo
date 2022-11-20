import React from "react";
import { Button } from "@chakra-ui/react";

const GeneralButton = (props) => {
  return (
    <Button
      colorScheme="blue"
      backgroundColor={"button"}
      color={"primary"}
      minWidth="10%"
      my={5}
      type={props.type}
      onClick={props.handleClick}
    >
      {props.buttonTitle}
    </Button>
  );
};

export default GeneralButton;
