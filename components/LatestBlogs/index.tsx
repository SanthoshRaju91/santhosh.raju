import { Box, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Card } from "../Card";
import { BlogMatter } from "../../common/type";
import useCustomColorModeValue from "../../common/useCustomColorModeValue";

type LatestBlogsProps = {
  blogs: Array<BlogMatter>;
};

const LatestBlogs: React.FC<LatestBlogsProps> = ({ blogs = [] }) => {
  const { textColor } = useCustomColorModeValue();

  return (
    <Box my={20}>
      <Flex flexDirection={"row"} gap={16}>
        <Box
          display={{
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
            "2xl": "block",
          }}
          bgColor={"teal.300"}
          w={"20px"}
          rounded={"sm"}
          shadow={"base"}
        />
        <VStack alignItems={"left"} spacing={16} py={8}>
          <Heading
            fontSize={{
              sm: "2xl",
              md: "2xl",
              lg: "3xl",
              xl: "3xl",
              "2xl": "3xl",
            }}
            textColor={textColor}
          >
            Latest Blogs
          </Heading>

          <VStack alignItems={"left"}>
            {blogs.map((blog, index) => (
              <Card
                key={index}
                title={blog.title}
                synopsis={blog.synopsis}
                user={blog.author}
                userAvatar={blog.authorProfilePic}
                published={blog.published}
                tags={blog.tags}
                slug={blog.slug}
              />
            ))}
          </VStack>
          <Box>
            <Link href={"/blogs"} passHref>
              <a>
                <HStack alignItems={"center"} spacing={2} cursor={"pointer"}>
                  <Text fontSize={"md"} textColor={textColor}>
                    There&apos;s more, right here
                  </Text>
                  <Text textColor={textColor}>
                    <BsArrowRight size={"18px"} />
                  </Text>
                </HStack>
              </a>
            </Link>
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
};

export { LatestBlogs };
