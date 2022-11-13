import Home from "./pages/Home";
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
    </ApolloProvider>
  );
};

export default App;
