import { Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { MdWork } from "react-icons/md";
import useCustomColorModeValue from "../../common/useCustomColorModeValue";

export interface CompanyBlockProps {
  name: string;
  title: string;
  Icon: IconType;
}

const CompanyBlock: React.FC<CompanyBlockProps> = ({ name, title, Icon }) => {
  const { textColor, bgColor } = useCustomColorModeValue();
  return (
    <Flex
      boxShadow={"base"}
      rounded={"md"}
      w={"max-content"}
      py={2}
      px={4}
      gap={4}
      flexDirection={"row"}
      bgColor={bgColor}
    >
      <HStack spacing={4}>
        <Text textColor={textColor}>
          <Icon size={"20px"} />
        </Text>
        <VStack alignItems={"flex-start"} spacing={0.5}>
          <Text fontSize={"md"} fontWeight={"bold"} textColor={textColor}>
            {name}
          </Text>
          <Text fontSize={"xs"} fontWeight={"medium"} textColor={textColor}>
            {title}
          </Text>
        </VStack>
      </HStack>
    </Flex>
  );
};

export default CompanyBlock;
