import Home from "./pages/Home";
import * as React from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { budgetTheme } from "./styles/theme";
import Navbar from "./components/Navbar";
import AddExpensePage from "./pages/AddExpense";

const App = () => {
  return (
    <ChakraProvider theme={budgetTheme}>
      <Navbar />
      <Container>
        <Home name="BudgetOnTheGo user" />
        <AddExpensePage />
      </Container>
    </ChakraProvider>
  );
};

export default App;
