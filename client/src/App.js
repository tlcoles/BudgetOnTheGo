import Home from "./pages/Home";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { budgetTheme } from "./styles/theme";
import InputField from "./components/inputField";

const App = () => {
  const [value, setValue] = React.useState("");
  const [email, setEmail] = React.useState("");

  return (
    <ChakraProvider theme={budgetTheme}>
      <Home name="BudgetOnTheGo user" />
      <InputField
        label="Email"
        type="email"
        placeholder="example@email.com"
        value={value}
        setValue={setValue}
      />
      <InputField
        label="Password"
        type="password"
        placeholder="example2@email.com"
        value={email}
        setValue={setEmail}
      />
    </ChakraProvider>
  );
};

export default App;
