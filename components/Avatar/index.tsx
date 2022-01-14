import { Box, HStack, Text } from "@chakra-ui/react";
import { Image } from "../Image";

export interface IUserAvatar {
  imageSrc: StaticImageData | string;
  userName: string;
}

const UserAvatar: React.FC<IUserAvatar> = ({
  imageSrc = "/authors/santhosh.raju.jpeg",
  userName,
}) => {
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
        <Text fontSize="xs" fontWeight={"medium"} textColor="blackAlpha.600">
          {userName}
        </Text>
      </HStack>
    </Box>
  );
};

export { UserAvatar };
