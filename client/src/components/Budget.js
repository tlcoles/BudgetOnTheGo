import React from "react";
import { Badge } from "@chakra-ui/react";

const Budget = () => {
  return (
    <div>
      <Badge colorScheme="green">
        {/* Budget needs to come from the signup page */}
        Budget: 2000
      </Badge>
    </div>
  );
};

export default Budget;
