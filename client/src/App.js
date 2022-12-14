import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { budgetTheme } from "./styles/theme";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import AddExpensePage from "./pages/AddExpense";
import SettingsPage from "./pages/SettingsPage";
import ExpensesPage from "./pages/SeeExpenses";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={budgetTheme}>
        <Router>
          <Navbar />
          <Container>
            <Routes>
              <Route path="/" element={<AddExpensePage />} />
              <Route path="/expenses" element={<ExpensesPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </Container>
        </Router>
      </ChakraProvider>
    </ApolloProvider>
  );
};

export default App;
