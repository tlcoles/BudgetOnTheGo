import Home from "./pages/Home";
import * as React from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { budgetTheme } from "./styles/theme";
import Navbar from "./components/Navbar";
import SignUpPage from "./pages/SignUp";

const App = () => {
  return (
    <ChakraProvider theme={budgetTheme}>
      <Navbar />
      <Container>
        <Home name="BudgetOnTheGo user" />
        <SignUpPage />
      </Container>
    </ChakraProvider>
  );
};

export default App;
