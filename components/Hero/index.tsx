import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { MdWavingHand } from "react-icons/md";
import { Image } from "../Image";
import Photo from "../../assets/Photo.png";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <Flex
      flexDirection={{ sm: "column", md: "column", lg: "row" }}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box mt={{ sm: 14, md: 14 }} maxW={{ sm: "100%", md: "100%", lg: "50%" }}>
        <VStack alignItems={"left"} spacing={2}>
          <Text
            fontSize={{ sm: "3xl", md: "3xl", lg: "4xl" }}
            fontWeight={"black"}
            letterSpacing={"wide"}
            textColor={"blackAlpha.800"}
          >
            Build. Blog. Share...
          </Text>
          <Text
            fontSize={"md"}
            fontWeight={"medium"}
            letterSpacing={"wide"}
            textColor={"brand.800"}
          >
            Making my bits count.
          </Text>
          <Text
            pt={4}
            fontSize={"md"}
            fontWeight={"normal"}
            letterSpacing={"normal"}
            lineHeight={1.6}
            textColor={"blackAlpha.700"}
          >
            Welcome to my personal Blogging Site. I share my thoughts, work and
            life experiences in Byte-size or Mega-Byte sizes.
          </Text>
          <Box pt={6} display={{ lg: "none" }} cursor={"pointer"}>
            <Link href={"/about"} passHref>
              <HStack>
                <Text
                  fontSize={"md"}
                  fontWeight={"bold"}
                  textColor={"blackAlpha.800"}
                >
                  Say Hello
                </Text>
                <MdWavingHand size={"18px"}></MdWavingHand>
              </HStack>
            </Link>
          </Box>
        </VStack>
      </Box>
      <Box
        maxW={{ sm: "0", md: "0", lg: "50%" }}
        display={{ sm: "none", md: "none", lg: "flex" }}
      >
        <VStack spacing={0.5} cursor={"pointer"}>
          <Image
            src={Photo}
            alt="User"
            width={"350px"}
            height={"375px"}
            backgroundPosition={"center"}
            backgroundRepeat={"no-repeat"}
            backgroundSize={"contain"}
          ></Image>
          <Link href={"/about"} passHref>
            <HStack>
              <Text
                fontSize={"md"}
                fontWeight={"bold"}
                textColor={"blackAlpha.800"}
              >
                Say Hello
              </Text>
              <MdWavingHand size={"18px"}></MdWavingHand>
            </HStack>
          </Link>
        </VStack>
      </Box>
    </Flex>
  );
};

export { Hero };
