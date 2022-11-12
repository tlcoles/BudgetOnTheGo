import React from "react";
import { Badge } from "@chakra-ui/react";

const Budget = () => {
  return (
    <Badge colorScheme="green">
      {/* Budget needs to come from the signup page */}
      Budget: 2000
    </Badge>
  );
};

export default Budget;