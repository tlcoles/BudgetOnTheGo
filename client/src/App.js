import Home from "./pages/Home";
import * as React from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { budgetTheme } from "./styles/theme";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/Login";
import SeeExpenses from "./pages/SeeExpenses";

const App = () => {
  return (
    <ChakraProvider theme={budgetTheme}>
      <Navbar />
      <Container>
        <Home name="BudgetOnTheGo user" />
        <LoginPage />
        <SeeExpenses />
      </Container>
    </ChakraProvider>
  );
};

export default App;
