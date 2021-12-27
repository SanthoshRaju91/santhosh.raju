import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { MdWavingHand } from "react-icons/md";
import { Image } from "../Image";
import Photo from "../../assets/Photo.svg";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <Box>
      <HStack>
        <VStack maxW={"60%"} alignItems={"left"} spacing={2}>
          <Text
            fontSize={"5xl"}
            fontWeight={"bold"}
            letterSpacing={"wide"}
            textColor={"gray.800"}
          >
            Build. Blog. Share...
          </Text>
          <Text
            fontSize={"md"}
            fontWeight={"bold"}
            textColor={"brand.800"}
            letterSpacing={"wide"}
          >
            Making my bits count...
          </Text>
          <Text pt={8} maxW={"65%"} lineHeight={1.6} textColor={"gray.600"}>
            Welcome to my personal Blogging Site. I share my thoughts, work and
            life experiences in Byte-size or Mega-Byte sizes.
          </Text>
        </VStack>
        <VStack maxW={"40%"}>
          <Image src={Photo} alt="User"></Image>
          <Link href={"/about"} passHref>
            <HStack>
              <Text fontSize={"md"} fontWeight={"semibold"} color={"gray.600"}>
                Say Hello
              </Text>
              <MdWavingHand size={"24px"} color="gray.600"></MdWavingHand>
            </HStack>
          </Link>
        </VStack>
      </HStack>
    </Box>
  );
};

export { Hero };
