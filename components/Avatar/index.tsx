import { Box, HStack, Text } from "@chakra-ui/react";
import { Image } from "../Image";

export interface IUserAvatar {
  imageSrc: StaticImageData;
  userName: string;
}

const UserAvatar: React.FC<IUserAvatar> = ({ imageSrc, userName }) => {
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
        <Text fontSize="xs" fontWeight={"semibold"} textColor="gray.500">
          {userName}
        </Text>
      </HStack>
    </Box>
  );
};

export { UserAvatar };
