import {
    Box,
  Button,
  Card,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { MdAttachEmail } from "react-icons/md";


const SupportCard = ({component, title, desc, icon}) => {
  return (
    <Flex
      gap={6}
      flexDirection={{
        base: "column",
        xl: "row",
      }}
    >
      <Stack>
        <Flex align="center" gap={2}>
          <Icon as={icon} boxSize={8} />
          <Text fontWeight="medium" textStyle="h1">
            {title}
          </Text>
        </Flex>
        <Text fontSize="md" color="black.60">
          {desc}
        </Text>
      </Stack>
      <Box maxW='550px' w='full'>
      {component}
      </Box>
    </Flex>
  );
};

export default SupportCard;
