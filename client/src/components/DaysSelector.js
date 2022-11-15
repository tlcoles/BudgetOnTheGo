import React from "react";
import {
  // Container,
  FormControl,
  FormLabel,
  // Code,
  // Link,
  // FormErrorMessage,
} from "@chakra-ui/react";

import {
  Select,
  // CreatableSelect,
  // AsyncSelect,
} from "chakra-react-select";

export const dayOptions = [
  { value: "30", label: "30 days", color: "#0052CC" },
  { value: "7", label: "7 days", color: "#5243AA" },
  { value: "1", label: "1 day", color: "#FF5630" },
];

const DaysSelector = (props) => {
  return (
    <FormControl p={4}>
      <FormLabel>Past expenses for last:</FormLabel>
      <Select
        name="days"
        className="chakra-react-select"
        classNamePrefix="chakra-react-select"
        options={dayOptions}
        placeholder="Select 30, 7, or 1 day(s)"
        selectedOptionStyle="check"
        chakraStyles={{
          dropdownIndicator: (provided) => ({
            ...provided,
            bg: "transparent",
            px: 2,
            cursor: "inherit",
          }),
          indicatorSeparator: (provided) => ({
            ...provided,
            display: "none",
          }),
        }}
      />
    </FormControl>
  );
};

export default DaysSelector;
