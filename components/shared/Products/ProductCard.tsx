import { Box,Text } from "@chakra-ui/react"
import { Props } from "framer-motion/types/types"
import { NextPage } from "next"
import Image from "next/image"


const ProductCard : NextPage<Props> = ({name,price}) => {
    return (
        <Box userSelect={"none"} w="250px" h="270px" boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"} p="5 0 5 0">
            <Image style={{"userSelect":"none"}} draggable="false" src={"/Mouse.png"} height="200px" width={"200px"} objectFit="contain"></Image>
            <Text>Logitech Mouse</Text> 
            <Text fontWeight={"600"}>12.99€</Text>
        </Box>  
    )
}

export default ProductCard;