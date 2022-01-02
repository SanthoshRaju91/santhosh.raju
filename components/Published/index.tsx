import { Box, HStack, Text } from "@chakra-ui/react";
import { FaRegCalendarAlt } from "react-icons/fa";
export interface IPublished {
  publishedDate: string;
}

const Published: React.FC<IPublished> = ({ publishedDate }) => {
  return (
    <Box>
      <HStack spacing={2}>
        <FaRegCalendarAlt />
        <Text
          fontSize={"xs"}
          fontWeight={"medium"}
          textColor={"blackAlpha.600"}
        >
          {publishedDate}
        </Text>
      </HStack>
    </Box>
  );
};

export { Published };
