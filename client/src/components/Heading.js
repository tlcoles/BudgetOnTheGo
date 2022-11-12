import { Heading } from "@chakra-ui/react";
import React from "react";

const HeadingH1Component = () => {
  return (
    <div>
      <Heading as="h1" mb={4} color={secondary}>
        Budget On The Go
      </Heading>
    </div>
  );
};

export default HeadingH1Component;
