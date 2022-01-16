import Link from "next/link";
import { Box, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { MdWavingHand } from "react-icons/md";
import useCustomColorModeValue from "../../common/useCustomColorModeValue";

const Hero: React.FC = () => {
  const { textColor } = useCustomColorModeValue();

  return (
    <Flex
      flexDirection={{ sm: "column", md: "column", lg: "column", xl: "row" }}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <VStack maxW={"50%"} spacing={10} alignItems={"left"}>
        <VStack alignItems={"left"} spacing={5}>
          <Heading fontSize={"5xl"} fontWeight={"bold"} textColor={textColor}>
            Build, Blog & Share
          </Heading>
          <Text fontSize={"md"} textColor={textColor} lineHeight={1.8}>
            Welcome to my personal Blogging Site. I share my thoughts, work and
            life experiences in Byte-size or Mega-Byte sizes
          </Text>
        </VStack>
        <HStack spacing={4}>
          <Box w={"18px"} h={"18px"} bgColor={"teal.300"} rounded={"sm"} />
          <Text fontSize={"md"} fontWeight={"semibold"} textColor={textColor}>
            Making My Bits Count
          </Text>
        </HStack>
      </VStack>

      <VStack spacing={4}>
        <Box
          w={"350px"}
          h={"350px"}
          bgColor={"teal.300"}
          rounded={"md"}
          shadow={"base"}
        />

        <Link href={"/about"} passHref>
          <a>
            <HStack spacing={3}>
              <Text
                fontSize={"md"}
                fontWeight={"semibold"}
                textColor={textColor}
              >
                Say Hello
              </Text>
              <Text textColor={"teal.300"}>
                <MdWavingHand size={"24px"} />
              </Text>
            </HStack>
          </a>
        </Link>
      </VStack>
    </Flex>
  );
};

export { Hero };
