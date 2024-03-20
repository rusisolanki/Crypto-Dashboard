import React from "react";
import SideNav from "./SideNav";
import TopBar from "./TopBar";
import SideDrawer from './SideDrawer'
import { Flex, Box, Container, useDisclosure } from "@chakra-ui/react";

const Layout = ({ title, children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Flex>
    <Box
    display={{
        base:'none',
        lg:'flex'
    }}
    >
      <SideNav />
    </Box>
      <Box flexGrow={1}>
        <TopBar title={title} onOpen={onOpen} isOpen={isOpen}/>
        <SideDrawer isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>
        <Container mt='6' maxW='1080px' h='calc(100vh - 88px)' overflowX='hidden' overflowY='auto' marginTop='6'>{children}</Container>
      </Box>
    </Flex>
  );
};

export default Layout;
