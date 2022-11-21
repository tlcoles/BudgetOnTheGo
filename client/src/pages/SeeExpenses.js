import React from "react";
// import Budget from "../components/Budget";
// import Remaining from "../components/Remaining";
// import ExpenseTotal from "../components/ExpenseTotal";
import { useQuery } from "@apollo/client";
import { QUERY_EXPENSES } from "../utils/queries.js";

import {
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  VStack,
} from "@chakra-ui/react";

import HeadingH1Component from "../components/Heading";
// import Chart from "../components/Chart";
// import DaysSelector from "../components/DaysSelector";

const heading = "Your past expenses";

const SeeExpenses = () => {
  const { data } = useQuery(QUERY_EXPENSES);
  // const { budgetData } = useQuery(QUERY_USERS);

  const expensesList = data?.expenses || [];
  // const budget = budgetData?.budget;

  return (
    <div>
      <VStack spacing={3}>
        <HeadingH1Component heading={heading} />
        <p>
          <strong>56.79€</strong>
        </p>
        <p>
          <strong>Your monthly budget is: 200.00€</strong>
        </p>
        {/* <Chart /> */}
        <Heading as="h3" size="lg">
          Details
        </Heading>
        {/* <DaysSelector /> */}
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Date</Th>
                <Th>Item</Th>
                <Th>Category</Th>
                <Th isNumeric>Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              {expensesList.map((expense) => {
                return (
                  <Tr key={expense._id}>
                    <Th>{expense.createdAt}</Th>
                    <Td>{expense.item}</Td>
                    <Td> {expense.category}</Td>
                    <Td isNumeric>{expense.amount}</Td>
                  </Tr>
                );
              })}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Sum</Th>
                <Th>&emsp;</Th>
                <Th>&emsp;</Th>
                <Th isNumeric>56.79</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </VStack>
    </div>
  );
};

export default SeeExpenses;
