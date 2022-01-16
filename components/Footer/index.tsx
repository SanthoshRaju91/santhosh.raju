import { Box, Container, Flex, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { AiOutlineCopyright } from "react-icons/ai";
import useCustomColorModeValue from "../../common/useCustomColorModeValue";
import { Image } from "../Image";

const Copyright: React.FC = () => {
  const { textColor } = useCustomColorModeValue();

  return (
    <HStack spacing={1}>
      <Text textColor={textColor}>
        <AiOutlineCopyright size={"16px"} />
      </Text>
      <Text fontSize={"xs"} fontWeight={"thin"} textColor={textColor}>
        copyright 2022
      </Text>
    </HStack>
  );
};

const Footer: React.FC = () => {
  return (
    <Box>
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
          <Link href="/" passHref>
            <a>
              <Image src="/Logo.svg" alt="Logo" width={180} height={45} />
            </a>
          </Link>

          <Box mt={{ sm: 4, md: 4, lg: 0 }}>
            <Copyright />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export { Footer };
