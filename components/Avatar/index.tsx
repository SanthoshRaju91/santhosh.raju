import { Box, HStack, Text } from "@chakra-ui/react";
import { Image } from "../Image";
import useCustomColorModeValue from "../../common/useCustomColorModeValue";

export interface IUserAvatar {
  imageSrc: StaticImageData | string;
  userName: string;
}

const UserAvatar: React.FC<IUserAvatar> = ({
  imageSrc = "/authors/santhosh.raju.jpeg",
  userName,
}) => {
  const { textColor } = useCustomColorModeValue();

  return (
    <Box>
      <HStack spacing={2} alignItems="center">
        <Image
          width={35}
          height={35}
          objectFit={"cover"}
          borderRadius={"full"}
          src={imageSrc}
          alt="User"
          boxShadow={"sm"}
        />
        <Text
          fontSize={{ sm: "xs", md: "xs", lg: "sm", xl: "sm", "2xl": "sm" }}
          fontWeight={"light"}
          textColor={textColor}
        >
          {userName}
        </Text>
      </HStack>
    </Box>
  );
};

export { UserAvatar };
