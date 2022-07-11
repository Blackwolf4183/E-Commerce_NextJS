import { Divider, Grid, GridItem, Heading, VStack,Box } from "@chakra-ui/react";
import { NextPage } from "next";
import CartItem from "../../components/Cart/CartItem";
import CartResume from "../../components/Cart/CartResume";

const Cart: NextPage = () => {
  return (
    <Grid templateColumns="6fr 1fr" gap="6" minH="100vh" p="10">
        <GridItem colStart={1} colEnd={1}>
            <VStack alignItems={"start"} w="80%" ml="10" alignContent={"left"}>
                <Heading>Your items</Heading>
                <Divider/>
                <Box h="30px"/>

                <CartItem />
                <CartItem />
                <CartItem />

            </VStack>
        </GridItem>

        <GridItem colStart={2} colEnd={2}>
            <CartResume />
        </GridItem>
    </Grid>
  );
};

export default Cart;
