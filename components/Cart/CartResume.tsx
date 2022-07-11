import { Box, Button, Divider, Heading, VStack,Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { NextPage } from "next";

const CartResume : NextPage = () => {

    return (
        <Box w="300px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;" p="5">
            <Heading mb="5">Resume</Heading>
            <Divider mb="5"/>

            <VStack w="100%" mb="5">
                <Text fontSize={"lg"}>Logitech 340M - 3.99€ x 3</Text>
                <Text fontSize={"lg"}>Logitech 340M - 3.99€ x 3</Text>
                <Text fontSize={"lg"}>Logitech 340M - 3.99€ x 3</Text>
                <Text fontSize={"lg"}>Logitech 340M - 3.99€ x 3</Text>
                <Text fontSize={"lg"}>Logitech 340M - 3.99€ x 3</Text>

            </VStack>

            <Divider/>
            
            <Text mt="5" align={"left"} fontWeight={"600"}>Shipping Fee: 23.95€</Text>
            <Text mb="5" align={"left"} fontWeight={"600"}>Total: 26.95€</Text>

            <Button w="100%" borderRadius={0} colorScheme="yellow">Checkout <FontAwesomeIcon style={{width:"25px",height:"25px", marginLeft:"10px"}} icon={faMoneyBill}/></Button>
        </Box>
    )
}

export default CartResume;