import { Box, HStack, VStack, Text } from "@chakra-ui/react";
import { IoIosShareAlt } from "react-icons/io";
import { AiOutlineTags } from "react-icons/ai";
import { UserAvatar } from "../Avatar";
import { Published } from "../Published";
import Link from "next/link";

export type CardProps = {
  title: string;
  synopsis: string;
  user: string;
  userAvatar: string;
  published: string;
  tags: Array<string>;
  slug: string;
};

const Card: React.FC<CardProps> = ({
  title,
  synopsis,
  user,
  userAvatar,
  published,
  tags,
  slug,
}) => {
  return (
    <Box
      maxW={"4xl"}
      borderWidth={"1px"}
      borderRadius={"lg"}
      borderColor={"gray.200"}
      boxShadow={"sm"}
      p={6}
    >
      <VStack spacing={4} alignItems={"left"}>
        <Link href={`/post/${slug}`} passHref>
          <Text
            fontSize={"2xl"}
            fontWeight={"black"}
            textColor={"blackAlpha.800"}
            cursor={"pointer"}
          >
            {title}
          </Text>
        </Link>
        <HStack justifyContent={"space-between"} alignItems={"center"}>
          <HStack spacing={16}>
            <UserAvatar imageSrc={userAvatar} userName={user} />
            <Published publishedDate={published} />
          </HStack>
          <IoIosShareAlt size={28} color="#4A5568" />
        </HStack>
        <Text
          fontSize={"sm"}
          fontWeight={"medium"}
          textColor={"blackAlpha.700"}
        >
          {synopsis}
        </Text>
        <Box>
          <HStack>
            <HStack alignItems={"center"} spacing={1}>
              <AiOutlineTags size={18} color="#0000007a" />
              <Text fontSize={"sm"} textColor={"blackAlpha.600"}>
                Tags:{" "}
              </Text>
            </HStack>
            <HStack>
              {tags.map((tag, index) => (
                <Text
                  key={index}
                  fontSize={"sm"}
                  textColor={"blue.400"}
                  borderBottomWidth={1}
                  borderBottomStyle={"dashed"}
                  borderBottomColor={"blue.400"}
                >
                  {tag}
                </Text>
              ))}
            </HStack>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export { Card };
