import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, VStack } from "@chakra-ui/react";
import myNewTheme from "../styles/theme";
import Footer from "../components/shared/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={myNewTheme}>
      <VStack textAlign={"center"} spacing="20">
        <Component {...pageProps} />
        <Footer />
      </VStack>
    </ChakraProvider>
  );
}

export default MyApp;
