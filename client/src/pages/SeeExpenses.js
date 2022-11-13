import React from "react";
import Budget from "../components/Budget";
import Remaining from "../components/Remaining";
import ExpenseTotal from "../components/ExpenseTotal";

import {
  Badge,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  //   TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const SeeExpenses = () => {
  return (
    <div>
      <h1>Insert Henriette Header</h1>

      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Item</Th>
              <Th>Category</Th>
              <Th isNumeric>Amount</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>apples and pears</Td>
              <Td>food</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>dress at Humana</Td>
              <Td>clothing</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>new curtains at Target</Td>
              <Td>household</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Item</Th>
              <Th>Category</Th>
              <Th isNumeric>Amount</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <div>
        <Budget /> | <Remaining /> | <ExpenseTotal />
      </div>
    </div>
  );
};

export default SeeExpenses;
