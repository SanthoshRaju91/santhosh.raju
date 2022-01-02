import { Box, HStack, VStack, Text } from "@chakra-ui/react";
import { IoIosShareAlt } from "react-icons/io";
import { UserAvatar } from "../Avatar";
import { Published } from "../Published";
import User from "../../assets/user.png";

const Card: React.FC = () => {
  return (
    <Box
      maxW={"4xl"}
      borderWidth={"1px"}
      borderRadius={"lg"}
      borderColor={"gray.200"}
      boxShadow={"sm"}
      p={6}
    >
      <VStack spacing={6} alignItems={"left"}>
        <Text fontSize={"xl"} fontWeight={"black"} textColor={"blackAlpha.800"}>
          Using Command Alias, to help your Development Workflow
        </Text>
        <Text
          fontSize={"sm"}
          fontWeight={"medium"}
          textColor={"blackAlpha.700"}
        >
          Improve your Development workflow by shorten commonly used commands.
          And save yourself from Carpal Tunnel Syndrome. Mac / Linux and Windows
          users can follow this step-by-step guide, very easy to setup and be
          done with long typings of command
        </Text>
        <HStack justifyContent={"space-between"} alignItems={"center"}>
          <HStack spacing={16}>
            <UserAvatar imageSrc={User} userName="Santhosh Raju" />
            <Published publishedDate="Dec 18, 2021" />
          </HStack>
          <IoIosShareAlt size={28} color="#4A5568" />
        </HStack>
      </VStack>
    </Box>
  );
};

export { Card };
