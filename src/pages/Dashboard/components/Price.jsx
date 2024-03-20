import React from "react";
import { CustomCard } from "../../../card/CustomCard";
import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import { IoMdAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const Price = () => {
  const timeArray = [
    "8:00 AM",
    "10:00 AM",
    "12:00 AM",
    "2:00 PM",
    "4:00 PM",
    "6:00 PM",
  ];
  return (
    <CustomCard h='full'>
      <Flex justifyContent="space-between" align="start">
        <Stack>
          <Text fontSize="sm" color="black.80">
            Wallet Balance
          </Text>
          <HStack
            spacing={4}
            align={{
              base: "flex-start",
              xl: "center",
            }}
            flexDirection={{
              base: "column",
              md: "row",
            }}
          >
            <HStack align="flex-end" spacing={2}>
              <Text textStyle="h3" fontWeight="medium">
                $ 10,023.00
              </Text>
              <Text color="green.500" fontSize="sm" fontWeight="medium">
                <Icon as={BsArrowUpRight} />
                0.5%
              </Text>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button display="flex" gap="5px" bg="green.500" color="white">
            <Icon as={IoMdAddCircleOutline} />
            Buy
          </Button>
          <Button display="flex" gap="5px" bg="green.500" color="white">
            <Icon as={GrSubtractCircle} />
            Sell
          </Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded" colorScheme="green" >
        <Flex justifyContent="flex-end">
          <TabList bg="black.5" p="3px">
            {["1H", "1D", "1M", "1Y"].map((tab) => (
              <Tab fontSize="sm" p="6px" borderRadius="4">
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image w="100%" src="/graph.svg" mt="2rem"/>
            <HStack justifyContent="space-between">
              {timeArray.map((time) => (
                <Text fontSize="xs" color="p.black">
                  {time}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>Day!</p>
          </TabPanel>
          <TabPanel>
            <p>Month!</p>
          </TabPanel>
          <TabPanel>
            <p>Year!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default Price;
