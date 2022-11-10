import Home from "./pages/Home";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import InputField from "./components/inputField";

const App = () => {
  const [value, setValue] = React.useState("");
  const handleChange = (event) => setValue(event.target.value);

  return (
    <ChakraProvider>
      <Home name="BudgetOnTheGo user" />
      <InputField
        label="Email"
        type="email"
        placeholder="example@email.com"
        value={value}
        onChange={handleChange}
      />
    </ChakraProvider>
  );
};

export default App;
