import Home from "./pages/Home";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import GeneralButton from "./components/GeneralButton";

function App() {
  return (
    <ChakraProvider>
      <Home name="BudgetOnTheGo user" />
      <GeneralButton /> //! Take this out after you're done testing
    </ChakraProvider>
  );
}

export default App;
