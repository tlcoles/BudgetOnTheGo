import Home from "./pages/Home";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { budgetTheme } from "./styles/theme";
import GeneralButton from "./components/GeneralButton";

const App = () => {
  const handleLogin = (event) => {
    console.log("loginClicked");
    console.log(event.target);
  };
  return (
    <ChakraProvider theme={budgetTheme}>
      <Home name="BudgetOnTheGo user" />
      <div>
        <GeneralButton buttonTitle="Log in" handleClick={handleLogin} />
      </div>
      <div>
        <GeneralButton buttonTitle="Sign up" />
      </div>
      <div>
        <GeneralButton buttonTitle="Submit" />
      </div>
    </ChakraProvider>
  );
};

export default App;
