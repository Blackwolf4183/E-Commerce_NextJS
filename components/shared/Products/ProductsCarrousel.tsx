import { HStack } from "@chakra-ui/react";
import { NextPage } from "next";
import ProductCard from "./ProductCard";

const ProductsCarrousel: NextPage = () => {
    return(
        <HStack spacing={5} w="80%" justify={"center"} h="300px" maxWidth={"1200px"}>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>


        </HStack>
    )
}

export default ProductsCarrousel;