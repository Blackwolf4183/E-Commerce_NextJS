import { Box,Text } from "@chakra-ui/react"
import { NextPage } from "next"
import Image from "next/image"


const ProductCard : NextPage = () => {
    return (
        <Box w="150px" h="200px" boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px;"} pt="5">
            <Image src={"/duckMock.png"} height="100px" width={"100px"}></Image>
            <Text>Elastic Duck</Text>
        </Box>
    )
}

export default ProductCard;