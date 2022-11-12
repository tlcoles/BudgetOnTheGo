import Home from "./pages/Home";
import * as React from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { budgetTheme } from "./styles/theme";
import Navbar from "./components/Navbar";
import SignupPage from "./pages/Signup";

const App = () => {
  return (
    <ChakraProvider theme={budgetTheme}>
      <Navbar />
      <Container>
        <Home name="BudgetOnTheGo user" />
      </Container>
    </ChakraProvider>
  );
};

export default App;
