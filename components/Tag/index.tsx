import { Tag as ChakraUiTag } from "@chakra-ui/react";

export interface ITag {
  text: string;
}

const Tag: React.FC<ITag> = ({ text }) => {
  return (
    <ChakraUiTag
      py={2}
      px={4}
      borderRadius={"full"}
      w={"full"}
      fontSize={"xs"}
      fontWeight={"normal"}
      justifyContent={"center"}
      textColor={"gray.700"}
      bgColor={"brand.100"}
    >
      {text}
    </ChakraUiTag>
  );
};

export { Tag };
