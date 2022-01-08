import { HStack, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

export interface TechBlockProps {
  skill: string;
  Icon: IconType;
}

const TechBlock: React.FC<TechBlockProps> = ({ skill, Icon }) => {
  return (
    <HStack
      boxShadow={"base"}
      p={2}
      spacing={2}
      rounded={"md"}
      inlineSize={"max-content"}
      borderWidth={1}
      borderColor={"blackAlpha.100"}
    >
      <Icon size={"26px"} />
      <Text fontSize={"sm"} fontWeight={"normal"} textColor={"blackAlpha.800"}>
        {skill}
      </Text>
    </HStack>
  );
};

export default TechBlock;
