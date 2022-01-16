import { Box, HStack, Text } from "@chakra-ui/react";
import { FaRegCalendarAlt } from "react-icons/fa";
import useCustomColorModeValue from "../../common/useCustomColorModeValue";

export interface IPublished {
  publishedDate: string;
}

const Published: React.FC<IPublished> = ({ publishedDate }) => {
  const { textColor } = useCustomColorModeValue();
  return (
    <Box>
      <HStack spacing={2}>
        <Text textColor={textColor}>
          <FaRegCalendarAlt size={"24px"} />
        </Text>

        <Text fontSize={"sm"} fontWeight={"light"} textColor={textColor}>
          {publishedDate}
        </Text>
      </HStack>
    </Box>
  );
};

export { Published };
