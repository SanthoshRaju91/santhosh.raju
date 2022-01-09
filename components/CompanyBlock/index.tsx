import { Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { MdWork } from "react-icons/md";

export interface CompanyBlockProps {
  name: string;
  title: string;
  Icon: IconType;
}

const CompanyBlock: React.FC<CompanyBlockProps> = ({ name, title, Icon }) => {
  return (
    <Flex
      boxShadow={"base"}
      borderWidth={1}
      borderColor={"blackAlpha.100"}
      rounded={"md"}
      w={"max-content"}
      py={2}
      px={4}
      gap={4}
      flexDirection={"row"}
    >
      <HStack spacing={4}>
        <Icon size={"20px"} color="#000000a3" />
        <VStack alignItems={"flex-start"} spacing={0.5}>
          <Text
            fontSize={"md"}
            fontWeight={"bold"}
            textColor={"blackAlpha.700"}
          >
            {name}
          </Text>
          <Text
            fontSize={"xs"}
            fontWeight={"medium"}
            textColor={"blackAlpha.700"}
          >
            {title}
          </Text>
        </VStack>
      </HStack>
    </Flex>
  );
};

export default CompanyBlock;
