import { Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { MdWork } from "react-icons/md";

export interface CompanyBlockProps {
  name: string;
  title: string;
  duration: string;
}

const CompanyBlock: React.FC<CompanyBlockProps> = ({
  name,
  title,
  duration,
}) => {
  return (
    <Flex
      boxShadow={"base"}
      borderWidth={1}
      borderColor={"blackAlpha.100"}
      rounded={"md"}
      w={"max-content"}
      py={4}
      px={6}
      gap={4}
      flexDirection={"row"}
    >
      <HStack spacing={1}>
        <MdWork size={"18px"} />
        <Text fontSize={"md"} fontWeight={"black"} textColor={"blackAlpha.700"}>
          {name}
        </Text>
      </HStack>
      <VStack alignItems={"flex-start"} spacing={1}>
        <Text
          fontSize={"sm"}
          fontWeight={"medium"}
          textColor={"blackAlpha.700"}
        >
          {title}
        </Text>
        <Text
          fontSize={"xs"}
          fontWeight={"normal"}
          textColor={"blackAlpha.700"}
        >
          {duration}
        </Text>
      </VStack>
    </Flex>
  );
};

export default CompanyBlock;
