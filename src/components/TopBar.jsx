import {
  Button,
  Box,
  HStack,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { FaBars, FaUserAlt } from "react-icons/fa";


const TopBar = ({title, onOpen}) => {
  return (
    <Box boxShadow='md' bg='white' >
      <HStack maxW='1280px' h="16" justify="space-between" px="20" mx="auto">
      <Icon as={FaBars} onClick={onOpen} fontSize='22px'
        display={{
            base: 'block',
            lg: 'none'
        }}
        />
        <Heading fontWeight='medium' fontSize='1.6em'>{title}</Heading>
        <Menu >
          <MenuButton as={Button} borderRadius='50%' h='12' colorScheme="gray"><Icon as={FaUserAlt} fontSize='18px'/></MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopBar;
