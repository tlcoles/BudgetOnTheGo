import Home from "./pages/Home";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { budgetTheme } from './styles/theme';
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <ChakraProvider theme={budgetTheme}>
      <Navbar />
      <Home name="BudgetOnTheGo user" />
    </ChakraProvider>
  );
};

export default App;
