import { Box, Button, Heading, HStack,Input,Text, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter,faFacebookF,faInstagram } from "@fortawesome/free-brands-svg-icons";

const MotionText = motion(Text);

const Footer: NextPage = () => {
    return (
        <VStack w="100%" h="400px" justify={"center"}  bgColor={"blackAlpha.900"} p="10" color="white" spacing="30">

            <HStack  spacing="100" mt="20">
                <VStack minW="250px" spacing="5" align="flex-start">
                    <HStack>
                        <Box w="50px" h="50px" bgColor={"green.400"}/>
                        <Heading fontSize={"4xl"}>Duckify</Heading>
                    </HStack>
                    <Text textAlign={"left"} fontSize="lg" color="whiteAlpha.800">Follow us in our social media and <br/> 
                    don't miss any new opportunities!</Text>

                    <HStack spacing="5">
                        <FontAwesomeIcon style={{width:"25px",height:"25px", color:"#00ACEE"}} icon={faTwitter}/>
                        <FontAwesomeIcon style={{width:"25px",height:"25px", color:"#E1306C"}} icon={faInstagram}/>
                        <FontAwesomeIcon style={{width:"25px",height:"25px", color:"#3B5998"}} icon={faFacebookF}/>
                    </HStack>
                </VStack>

                <VStack spacing="2" align="flex-start" minW="225px" color="whiteAlpha.800">
                    <MotionText fontSize={"xl"} whileHover={{scale:1.05, color:"rgba(255,255,255,1)"}} transition={{ duration: 0.25 }}><Link href={"/aboutus"} >About Us</Link></MotionText>
                    <MotionText fontSize={"xl"} whileHover={{scale:1.05, color:"rgba(255,255,255,1)"}} transition={{ duration: 0.25 }}><Link href={"/contact"} >Contact Us</Link></MotionText>
                    <MotionText fontSize={"xl"} whileHover={{scale:1.05, color:"rgba(255,255,255,1)"}} transition={{ duration: 0.25 }}><Link href={"/terms"} >Terms and Conditions</Link></MotionText>
                </VStack>

                <VStack align="flex-start" spacing="5" minW="200px">
                    <Text fontSize={"xl"}>Don't miss a thing!</Text>
                    <Input borderRadius={0} placeholder="*Email" fontSize={"lg"}/>
                    <Button colorScheme={"yellow"} borderRadius="0" w="120px" color="blackAlpha.900">Subscribe</Button>
                </VStack>
            </HStack>

            <Text textAlign={"left"}>Copyright</Text>
        </VStack>
    )
}

export default Footer;