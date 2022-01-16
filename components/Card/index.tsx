import { Box, HStack, VStack, Text } from "@chakra-ui/react";
import { IoIosShareAlt } from "react-icons/io";
import { AiOutlineTags } from "react-icons/ai";
import { UserAvatar } from "../Avatar";
import { Published } from "../Published";
import Link from "next/link";
import useCustomColorModeValue from "../../common/useCustomColorModeValue";

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
  tags = [],
  slug,
}) => {
  const { textColor, bgColor, borderColor } = useCustomColorModeValue();

  return (
    <Box
      maxW={"4xl"}
      bgColor={bgColor}
      borderWidth={2}
      borderColor={borderColor}
      borderRadius={"lg"}
      shadow={"sm"}
      px={{ sm: 4, md: 4, lg: 8, xl: 8, "2xl": 8 }}
      py={8}
    >
      <VStack spacing={6} alignItems={"left"}>
        <VStack alignItems={"left"} spacing={6}>
          <Link href={`/post/${slug}`} passHref>
            <a>
              <Text
                fontSize={"2xl"}
                fontWeight={"bold"}
                textColor={textColor}
                cursor={"pointer"}
              >
                {title}
              </Text>
            </a>
          </Link>
          <HStack justifyContent={"space-between"} alignItems={"center"}>
            <HStack spacing={{ sm: 4, md: 4, lg: 16, xl: 16, "2xl": 16 }}>
              <UserAvatar imageSrc={userAvatar} userName={user} />
              <Published publishedDate={published} />
            </HStack>
            <Link href={"/"}>
              <a>
                <Text textColor={textColor}>
                  <IoIosShareAlt size={"24px"} />
                </Text>
              </a>
            </Link>
          </HStack>
        </VStack>

        <Text fontSize={"sm"} fontWeight={"normal"} textColor={textColor}>
          {synopsis}
        </Text>
        <Box>
          <HStack>
            <HStack alignItems={"center"} spacing={1}>
              <Text textColor={textColor}>
                <AiOutlineTags size={"18px"} />
              </Text>
              <Text fontSize={"sm"} textColor={textColor}>
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
