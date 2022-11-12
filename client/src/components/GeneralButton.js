import React from "react";
import { Button } from "@chakra-ui/react";

const GeneralButton = (props) => {
  console.log(props);
  return (
    <Button
      colorScheme="blue"
      backgroundColor={"button"}
      color={"primary"}
      minWidth="10%"
      onClick={props.handleClick}
    >
      {props.buttonTitle}
    </Button>
  );
};

export default GeneralButton;
