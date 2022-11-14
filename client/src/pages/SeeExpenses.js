import React from "react";
// import Budget from "../components/Budget";
// import Remaining from "../components/Remaining";
// import ExpenseTotal from "../components/ExpenseTotal";

import {
  Heading,
  Select,
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


const heading = "Your past expenses";

const SeeExpenses = () => {
  return (
    <div>
      <VStack spacing={3}>
        <HeadingH1Component heading={heading} />
        <p><strong>56.79€</strong></p>
        <p><strong>Your monthly budget is: 200.00€</strong></p>
        <Heading as='h3' size='lg'>THIS IS WHERE THE PIE CHART WOULD GO</Heading>
        <Heading as='h3' size='lg'>Details</Heading>
        <Heading as='h3' size='lg'>THIS IS WHERE THE DROPPDOWN WOULD GO</Heading>
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
              <Tr>
                <Th>14.11.2022</Th>
                <Td>apples and pears</Td>
                <Td>food</Td>
                <Td isNumeric>25.40</Td>
              </Tr>
              <Tr>
                <Th>14.11.2022</Th>
                <Td>dress at Humana</Td>
                <Td>clothing</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Th>14.11.2022</Th>
                <Td>new curtains at Target</Td>
                <Td>household</Td>
                <Td isNumeric>0.91</Td>
              </Tr>
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
