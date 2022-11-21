import React from "react";
// import Budget from "../components/Budget";
// import Remaining from "../components/Remaining";
// import ExpenseTotal from "../components/ExpenseTotal";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries.js";

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
import Chart from "../components/Chart";
// import DaysSelector from "../components/DaysSelector";

const heading = "Your past expenses";

const SeeExpenses = () => {
  const { data } = useQuery(QUERY_ME);

  const expensesList = data?.me.expenses || [];
  const budget = data?.me.budget || 0;

  //timestamp conversion
  const convertedDate = function (timestamp) {
    var d = new Date(parseInt(timestamp));
    var timeStampCon =
      d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();

    return timeStampCon;
  };

  let sum = 0;
  for (let index = 0; index < expensesList.length; index++) {
    sum = sum + expensesList[index].amount;
  }

  return (
    <div>
      <VStack spacing={3}>
        <HeadingH1Component heading={heading} />
        <p>
          <strong>€ {sum.toFixed(2)}</strong>
        </p>
        <p>
          <strong>Your monthly budget is: € {budget}</strong>
        </p>
        <Chart />
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
                    <Th>{convertedDate(expense.createdAt)}</Th>
                    <Td>{expense.item}</Td>
                    <Td> {expense.category}</Td>
                    <Td isNumeric>{expense.amount.toFixed(2)}</Td>
                  </Tr>
                );
              })}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Sum</Th>
                <Th>&emsp;</Th>
                <Th>&emsp;</Th>
                <Th isNumeric>€ {sum.toFixed(2)}</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </VStack>
    </div>
  );
};

export default SeeExpenses;
