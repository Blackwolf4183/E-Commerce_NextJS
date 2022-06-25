import {
  HStack,
  Text,
  Box,
  Spacer,
  IconButton,
  Button,
  Input,
  Heading,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { SearchIcon } from "@chakra-ui/icons";
import Image from "next/image";

const Navbar: NextPage = () => {
  return (
    <HStack
      spacing="5"
      w="60%"
      maxW="1200px"
      margin="auto"
      height="60px"
      left="0"
      right="0"
      top="0"
      position={"fixed"}
      borderBottomWidth="1px"
      borderBottomColor="whiteAlpha.500"
      color="whiteAlpha.800"
      userSelect={"none"}
    >
      <Image src={"/MyLogoWhite.svg"} width="40px" height="40px"></Image>

      <Box borderLeftWidth="1px" borderLeftColor="whiteAlpha.500" h="100%" />

      <HStack spacing="0" w="400px">
        <SearchIcon />
        <Input
          maxLength={40}
          borderWidth={"0"}
          _focus={{ borderWidth: "0" }}
          placeholder="Start typing to find anything..."
        />
      </HStack>

      <Text cursor={"pointer"} _hover={{ textDecor: "underline" }}>
        New
      </Text>
      <Text cursor={"pointer"} _hover={{ textDecor: "underline" }}>
        Products
      </Text>
      <Spacer />
      <Box borderLeftWidth="1px" borderLeftColor="whiteAlpha.500" h="100%" />

      {/* Cart with amount of items */}

      <Box>
        <Box
          position={"absolute"}
          pt="1px"
          pr="1px"
          zIndex="1"
          bgColor="red.500"
          w="15px"
          h="15px"
          borderRadius={"100%"}
          right="-2"
        >
          <Heading textAlign="center" fontSize={"12px"}>
            1
          </Heading>
        </Box>
        <IconButton
          _hover={{ bgColor: "transparent", color: "white" }}
          pt="1"
          size={"sm"}
          aria-label="shopping-cart"
          bgColor={"transparent"}
        >
          <FontAwesomeIcon style={{ width: "25px" }} icon={faCartShopping} />
        </IconButton>
      </Box>
    </HStack>
  );
};

export default Navbar;
