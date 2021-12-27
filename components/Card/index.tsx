import { Box, HStack, VStack, Text } from "@chakra-ui/react";
import { Image } from "../Image";
import Placeholder from "../../assets/Placeholder.svg";
import { UserAvatar } from "../Avatar";
import { Published } from "../Published";
import User from "../../assets/user.png";

const Card: React.FC = () => {
  return (
    <Box
      maxW={"4xl"}
      borderWidth={"1px"}
      borderRadius={"lg"}
      overflow={"hidden"}
      boxShadow={"sm"}
      p={3}
    >
      <HStack spacing={6}>
        <Box w={"25%"}>
          <Image src={Placeholder} alt="Placeholder"></Image>
        </Box>
        <Box w={"75%"}>
          <VStack alignItems={"left"} spacing={4}>
            <Text fontSize={"2xl"} fontWeight={"bold"} textColor={"gray.700"}>
              Using Command Alias, to help your Development Workflow
            </Text>
            <Text fontSize={"md"} fontWeight={"normal"} textColor={"gray.600"}>
              Improve your Development Workflow by shortening commonly used
              commands, and save yourself from Carpal Tunnel Syndrome.
            </Text>
            <HStack spacing={16}>
              <UserAvatar imageSrc={User} userName="Santhosh Raju" />
              <Published publishedDate="Dec 18, 2021"></Published>
            </HStack>
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
};

export { Card };
