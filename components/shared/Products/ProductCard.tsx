import { Box, Button, Text } from "@chakra-ui/react";
import { Props } from "framer-motion/types/types";
import { NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const MotionBox = motion(Box);

const ProductCard: NextPage<Props> = ({ name, price }) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  return (
    <MotionBox
      userSelect={"none"}
      minW="250px"
      w="250px"
      h="270px"
      boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"}
      p="5 0 5 0"
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
      whileHover={{ height: "350px" }}
    >
      <Image
        style={{ userSelect: "none" }}
        draggable="false"
        src={"/Mouse.png"}
        height="200px"
        width={"200px"}
        objectFit="contain"
      ></Image>
      <Text>Logitech Mouse</Text>
      <Text fontWeight={"600"}>12.99€</Text>
      {isHovering && (
        <Button borderRadius={"none"} w="80%" colorScheme={"yellow"} mt="10">
          More detail
        </Button>
      )}
    </MotionBox>
  );
};

export default ProductCard;
