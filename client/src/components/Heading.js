import { Heading } from "@chakra-ui/react";
import React from "react";

const HeadingH1Component = (props) => {
  return (
    <Heading as="h1" mt={4} mb={4} color={"secondary"}>
      {props.heading}
    </Heading>
  );
};

export default HeadingH1Component;
