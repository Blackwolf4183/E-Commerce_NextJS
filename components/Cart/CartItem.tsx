import {
  Box,
  Text,
  HStack,
  Spacer,
  VStack,
  IconButton,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import Image from "next/image";
import { faPlusCircle,faMinusCircle } from "@fortawesome/free-solid-svg-icons";

const CartItem: NextPage = () => {
  return (
    <HStack w="100%" spacing="10">
      <Box
        w="90%"
        h="150px"
        boxShadow={
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
        }
      >
        <HStack w="100%" p="5">
          <VStack alignItems={"start"}>
            <Text fontSize={"xl"}>Logitech 340M - Ratón gaming</Text>
            <Text>3.99€</Text>
          </VStack>
          <Spacer />
          <Image
            src="/Mouse.png"
            width="100px"
            height={"100px"}
            objectFit="contain"
          />
        </HStack>
      </Box>

      <HStack>
        <IconButton
          size={"sm"}
          aria-label="minus-button"
          bgColor={"transparent"}
        >
          <FontAwesomeIcon style={{ width: "25px" }} icon={faMinusCircle} />
        </IconButton>
        <Text fontSize={"2xl"} fontWeight="700">1</Text>
        <IconButton
          size={"sm"}
          aria-label="plus-button"
          bgColor={"transparent"}
        >
          <FontAwesomeIcon style={{ width: "25px" }} icon={faPlusCircle} />
        </IconButton>
      </HStack>
    </HStack>
  );
};

export default CartItem;
