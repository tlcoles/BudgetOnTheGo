import Home from "./pages/Home";
import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { budgetTheme } from "./styles/theme";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/Login";

const App = () => {
  return (
    <ChakraProvider theme={budgetTheme}>
      <Navbar />
      <Container>
        <Router>
          <Routes>
            <Route path="/" element={<Home name="BudgetOnTheGo user" />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Router>
      </Container>
    </ChakraProvider>
  );
};

export default App;
