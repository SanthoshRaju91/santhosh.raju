import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { AiOutlineCopyright } from "react-icons/ai";
import LogoSmall from "../../assets/Logo-Small.svg";
import { Image } from "../Image";

export const SocialIcons: React.FC = () => {
  return (
    <HStack spacing={6}>
      <a href="https://github.com/SanthoshRaju91" rel="noopener">
        <BsGithub size={"18px"} />
      </a>
      <a
        href="https://www.linkedin.com/in/santhosh-nagaraj-9558b0157/"
        rel="noopener"
      >
        <BsLinkedin size={"18px"} />
      </a>
      <a href="https://twitter.com/santhoshraju2" rel="noopener">
        <BsTwitter size={"18px"} />
      </a>
    </HStack>
  );
};

const Copyright: React.FC = () => {
  return (
    <HStack>
      <AiOutlineCopyright size={"18px"} />
      <Text fontSize={"xs"} fontWeight={"normal"} textColor={"gray.600"}>
        copyright 2021
      </Text>
    </HStack>
  );
};

const Footer: React.FC = () => {
  return (
    <Box py={8} mt={12} bgColor={"brand.50"}>
      <Box maxW={"75%"} w={"85%"} m={"auto"}>
        <Flex
          flexDirection={{ sm: "column", md: "column", lg: "row" }}
          justifyContent={"space-between"}
        >
          <HStack
            alignItems={"center"}
            justifyContent={"space-between"}
            spacing={6}
          >
            <Image src={LogoSmall} alt="Small Logo"></Image>
            <SocialIcons />
          </HStack>
          <Box mt={{ sm: 4, md: 4, lg: 0 }}>
            <Copyright />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export { Footer };
