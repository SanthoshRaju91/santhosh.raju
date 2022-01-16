import { Box, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { AiOutlineCopyright } from "react-icons/ai";
import { Image } from "../Image";

const Copyright: React.FC = () => {
  return (
    <HStack spacing={1}>
      <AiOutlineCopyright size={"16px"} color="#565a5a" />
      <Text fontSize={"xs"} fontWeight={"normal"} textColor={"blackAlpha.600"}>
        copyright 2022
      </Text>
    </HStack>
  );
};

const Footer: React.FC = () => {
  return (
    <Box py={8} mt={12} bgColor={"brand.50"}>
      <Container
        maxW={{ sm: "xl", md: "3xl", lg: "4xl", xl: "6xl", "2xl": "7xl" }}
        px={6}
        py={10}
      >
        <Flex
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Image src="/Logo.svg" alt="Logo" width={180} height={45}></Image>
          <Box mt={{ sm: 4, md: 4, lg: 0 }}>
            <Copyright />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export { Footer };
