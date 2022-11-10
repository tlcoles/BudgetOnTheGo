import Home from "./pages/Home";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <ChakraProvider>
      <Navbar />
      <Home name="BudgetOnTheGo user" />
    </ChakraProvider>
  );
};

export default App;
