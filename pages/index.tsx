import { Heading, Text,Box, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/shared/Navbar";
import ProductsCarrousel from "../components/shared/Products/ProductsCarrousel";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>MyGame - Inicio</title>
        <meta name="MyGame" content="Tu tienda de gaming online" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar/>

        <VStack
          w="100vw"
          h="70vh"
          minH={"600px"}
          bgColor="gray.600"
          bgRepeat="no-repeat"
          bgImage={"/background2.jpg"}
          bgSize={"cover"}
          alignItems={"center"}
          justifyContent="center"
          p="10"
        >
          <Box w="80%" textAlign={"left"} h="50%">

            <Heading color="white" fontSize={"5xl"}>Encuentra todos tus productos gaming en </Heading> {' '}
            <Heading color={"black"} fontSize={"6xl"}>MyGame</Heading>
            <Text fontSize={"2xl"} color="whiteAlpha.800">Desde las mejores marcas,<br/> para tu disfrute como Gamer.</Text>
          </Box>
        </VStack>

        <VStack pt="10" spacing="10" pb="5">
          <Heading fontSize={"3xl"}>Featured Products</Heading>
          <ProductsCarrousel/>
        </VStack>

      <VStack>

        
      </VStack>

      </main>
    </div>
  );
};

export default Home;
