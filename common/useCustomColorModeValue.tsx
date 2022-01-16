import { useColorModeValue } from "@chakra-ui/react";

function useCustomColorModeValue() {
  const textColor = useColorModeValue("gray.700", "gray.200");
  const bgColor = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.100", "gray.900");

  return {
    textColor,
    bgColor,
    borderColor,
  };
}

export default useCustomColorModeValue;
