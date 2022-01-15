import { Box, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { AiOutlineCopyright } from "react-icons/ai";
import { Image } from "../Image";

export const SocialIcons: React.FC = () => {
  return (
    <HStack spacing={6}>
      <a href="https://github.com/SanthoshRaju91" rel="noopener">
        <BsGithub size={"22px"} color="#565a5a" />
      </a>
      <a
        href="https://www.linkedin.com/in/santhosh-nagaraj-9558b0157/"
        rel="noopener"
      >
        <BsLinkedin size={"22px"} color="#565a5a" />
      </a>
      <a href="https://twitter.com/santhoshraju2" rel="noopener">
        <BsTwitter size={"22px"} color="#565a5a" />
      </a>
    </HStack>
  );
};

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
        w={{ sm: "80%", md: "80%", lg: "80%", xl: "80%", "2xl": "60%" }}
        maxW={{ sm: "80%", md: "80%", lg: "80%", xl: "80%", "2xl": "60%" }}
        p={0}
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
