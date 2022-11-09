import Home from "./pages/Home";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider>
      <Home name="BudgetOnTheGo user" />
    </ChakraProvider>
  );
};

export default App;
