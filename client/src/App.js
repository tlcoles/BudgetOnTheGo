import Home from './pages/Home';
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { budgetTheme } from './styles/theme';

function App() {
  return (
    <ChakraProvider theme={budgetTheme}>
      <Home name="BudgetOnTheGo user"/>
    </ChakraProvider>
  )
}

export default App;