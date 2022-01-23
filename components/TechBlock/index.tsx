import { HStack, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import useCustomColorModeValue from "../../common/useCustomColorModeValue";

export interface TechBlockProps {
  skill: string;
  Icon: IconType;
}

const TechBlock: React.FC<TechBlockProps> = ({ skill, Icon }) => {
  const { textColor, bgColor } = useCustomColorModeValue();
  return (
    <HStack
      boxShadow={"base"}
      p={2}
      spacing={2}
      rounded={"md"}
      inlineSize={"max-content"}
      bgColor={bgColor}
    >
      <Text textColor={textColor}>
        <Icon size={"26px"} />
      </Text>
      <Text fontSize={"sm"} fontWeight={"normal"} textColor={textColor}>
        {skill}
      </Text>
    </HStack>
  );
};

export default TechBlock;
