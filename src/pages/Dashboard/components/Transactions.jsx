import React, { Fragment } from "react";
import { CustomCard } from "../../../card/CustomCard";
import { BsCurrencyDollar } from "react-icons/bs";
import { PiCurrencyBtcBold } from "react-icons/pi";
import { Button, Divider, Flex, Icon, Stack, Text } from "@chakra-ui/react";

const Transactions = () => {
  const transactions = [
    {
      id: "1",
      icon: BsCurrencyDollar,
      title: "CAD Deposit",
      amount: "+$80,000",
      date: "2024-03-04 5:00 PM",
    },
    {
      id: "2",
      icon: PiCurrencyBtcBold,
      title: "BTC Sell",
      amount: "-11.923058 BTC",
      date: "2024-03-04 5:00 PM",
    },
    {
      id: "3",
      icon: BsCurrencyDollar,
      title: "CAD Deposit",
      amount: "+$80,000",
      date: "2024-03-04 5:00 PM",
    },
  ];
  return (
    <CustomCard h='full'>
      <Text fontSize="sm" color="black.80">
        Recent Transactions
      </Text>
      <Stack mt='2rem' spacing={4}>
        {transactions.map((transaction, i) => (
            <Fragment>
            {i !== 0 && <Divider/>}
          <Flex key={transaction.id} gap={4}>
            <Flex
              justifyContent="center"
              alignItems="center"
              boxSize={12}
              borderRadius="full"
              bg="black.5"
            >
              <Icon as={transaction.icon} />
            </Flex>
            <Flex justifyContent="space-between" w='100%'>
              <Stack spacing='0'>
                <Text textStyle='h6' fontWeight='medium'>{transaction.title}</Text>
                <Text fontSize='sm'>{transaction.date}</Text>
              </Stack>
              <Text textStyle='h6' fontWeight='medium'>{transaction.amount}</Text>
            </Flex>
          </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button w='full' bg="green.500" mt={4}>View All Transactions</Button>
    </CustomCard>
  );
};

export default Transactions;
