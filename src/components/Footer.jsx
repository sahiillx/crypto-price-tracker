import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import founder1 from "../assets/founder1.jpg";
import founder2 from "../assets/pf.png";
import founder3 from "../assets/founder3.jpg";
import founder4 from "../assets/founder4.jpg";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.
          </Text>
        </VStack>
       
        <VStack spacing="4">
          <Avatar boxSize={["24", "28"]} mt={["4", "0"]} src={founder2} />
          <Avatar boxSize={["24", "28"]} mt={["4", "0"]} src={founder1} />
          <Avatar boxSize={["24", "28"]} mt={["4", "0"]} src={founder3} />
          <Avatar boxSize={["24", "28"]} mt={["4", "0"]} src={founder4} />
          <Text>Our Founders</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
