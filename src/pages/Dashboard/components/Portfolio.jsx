import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { LuDownload } from "react-icons/lu";
import { FiUpload } from "react-icons/fi";

const Portfolio = () => {
  return (
    <HStack
      bg="white"
      p="4"
      justifyContent="space-between"
      align={{
        base: "flex-start",
        xl: "center",
      }}
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      spacing={{
        base: "4",
        xl: "0",
      }}
    >
      <HStack
        spacing={{
          base: "4",
          xl: "16",
        }}
        align={{
          base: "flex-start",
          xl: "center",
        }}
        flexDirection={{
          base: "column",
          xl: "row",
        }}
      >
        <Stack>
          <Text fontSize="sm" color="black.80">
            Total Value
          </Text>
          <Text textStyle="h3" color="p.black" fontWeight="medium">
            $ 2,039,490
          </Text>
        </Stack>
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
            <HStack>
              <Text textStyle="h3" fontWeight="medium">
                23.329581
              </Text>
              <Tag>BTC</Tag>
            </HStack>
            <HStack>
              <Text textStyle="h3" fontWeight="medium">
                $ 1500.00
              </Text>
              <Tag>CAD</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>
      <HStack>
        <Button display="flex" gap="5px" bg="green.500" color="white">
          <Icon as={LuDownload} />
          Deposit
        </Button>
        <Button display="flex" gap="5px" bg="green.500" color="white">
          <Icon as={FiUpload} />
          Withdraw
        </Button>
      </HStack>
    </HStack>
  );
};

export default Portfolio;
