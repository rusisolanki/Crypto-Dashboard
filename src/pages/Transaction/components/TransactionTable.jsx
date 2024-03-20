import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  HStack,
  Text,
  Tag,
} from "@chakra-ui/react";

const TransactionTable = () => {
  const transactionData = [
    {
      id: "HD82NA2H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "INR Deposit",
        tag: "E-Transfer",
      },
      amount: "+₹81,123",
      status: "pending",
    },
    {
      id: "HD82NA4H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "INR Widthdraw",
        tag: "Wire Transfer",
      },
      amount: "-₹55,123",
      status: "processing",
    },
    {
      id: "HD82NA5H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Buy",
        tag: "BTC",
      },
      amount: "12.0554484 BTC",
      status: "cancelled",
    },
    {
      id: "HD82NA6H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Sell",
        tag: "BTC",
      },
      amount: "-2.0554484 BTC",
      status: "completed",
    },
    {
      id: "HD82NA7H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "BTC Deposit",
      },
      amount: "+15.5000000",
      status: "pending",
    },
    {
      id: "HD82NA8H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "BTC Widthdraw",
      },
      amount: "-5.05555544",
      status: "completed",
    },
  ];

  const statusBg = {
    pending: "#797E82",
    processing: "#F5A50B",
    completed: "#059669",
    cancelled: "#DC2626",
  };
  

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Date & Time</Th>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody color='p.black'>
            {transactionData.map(data => (
                <Tr key={data.id}>
                    <Td fontSize="md" fontWeight='medium'>{data.id}</Td>
                    <Td>
                        <Text fontSize="md" fontWeight='medium'>{data.date}</Text>
                        <Text fontSize='xs' color='black.60'>{data.time}</Text>
                    </Td>
                    <Td>
                        <Text fontSize="md" fontWeight='medium'>{data.type.name}</Text>
                        <Text fontSize='xs' color='black.60'>{data.type.tag}</Text>
                    </Td>
                    <Td fontSize="md" fontWeight='medium'>{data.amount}</Td>
                    <Td fontSize="md" fontWeight='medium'>
                        <Tag bg={statusBg[data.status]} color='white' borderRadius='full'>{data.status}</Tag>
                    </Td>
                </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;
