import { Box, HStack, Wrap, Text, IconButton } from "@chakra-ui/react";
import { NextPage } from "next";
import ProductCard from "./ProductCard";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const RecentlyAdded: NextPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleChangePage = (add: boolean) => {
    if (add) {
      setCurrentPage(currentPage + 1);
    } else {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    }
  };

  return (
    <>
      <Wrap pt="5" w="80%" spacing="5" justify={"center"}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Wrap>

      <HStack pt="10">
        {currentPage > 1 && (
          <IconButton
            _hover={{ bgColor: "transparent" }}
            size={"sm"}
            aria-label="shopping-cart"
            bgColor={"transparent"}
            onClick={() => handleChangePage(false)}
          >
            <FontAwesomeIcon style={{ width: "20px" }} icon={faAngleLeft} />
          </IconButton>
        )}

        <Box w="50px" h="50px" color="white" pt="2" userSelect={"none"} bgColor={"blackAlpha.800"}>
          <Text fontSize={"2xl"}>{currentPage}</Text>
        </Box>
        <IconButton
          _hover={{ bgColor: "transparent" }}
          size={"sm"}
          aria-label="shopping-cart"
          bgColor={"transparent"}
          onClick={() => handleChangePage(true)}
        >
          <FontAwesomeIcon style={{ width: "20px" }} icon={faAngleRight} />
        </IconButton>
      </HStack>
    </>
  );
};

export default RecentlyAdded;
