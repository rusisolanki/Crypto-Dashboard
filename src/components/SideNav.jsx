import { Box, Stack, HStack, Icon, Text, Heading } from "@chakra-ui/react";
import { MdDashboard } from "react-icons/md";
import { TbArrowsExchange } from "react-icons/tb";
import { MdOutlineContactSupport } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const SideNav = () => {
  const location = useLocation();

  const activeLink = (link) => {
    return location.pathname === link;
  };

  const sideLinks = [
    {
      icon: MdDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: TbArrowsExchange,
      text: "Transaction",
      link: "/transaction",
    },
  ];
  return (
    <Stack
      justify="space-between"
      boxShadow={{
        base: "none",
        lg: "md",
      }}
      w={{ base: "full", lg: "16rem" }}
      h="100vh"
      bg="white"
    >
      <Box>
        <Heading textAlign="center" fontSize="1.5em" as="h1" pt="3.5rem">
          CRYPTO ANALYSIS
        </Heading>
        <Box mt="6" mx="3">
          {sideLinks.map((sideLink) => (
            <Link to={sideLink.link} key={sideLink.text}>
              <HStack
                py="3"
                px="4"
                bg={activeLink(sideLink.link) ? "#e6f1e6" : "transparent"}
                color={activeLink(sideLink.link) ? "#171717" : "#6e6e6e"}
                _hover={{
                  bg: "#e6f1e6",
                  color: "#171717",
                }}
                
              >
                <Icon as={sideLink.icon} />
                <Text fontWeight="medium">{sideLink.text}</Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>
      <Box mt="6" mx="3" mb="6">
        <Link to="/support">
          <HStack
            py="3"
            px="4"
            bg={activeLink("/support") ? "#e6f1e6" : "transparent"}
            color={activeLink("/support") ? "#171717" : "#6e6e6e"}
            _hover={{
              bg: "#e6f1e6",
              color: "#171717",
            }}
          >
            <Icon as="MdOutlineContactSupport" />
            <Text fontWeight="medium">Support</Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default SideNav;
