import { Box, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { Card } from "../components/Card";
import { BlogMatter } from "../common/type";
import getBlogs from "../common/getBlogs";
import useCustomColorModeValue from "../common/useCustomColorModeValue";

export type BlogsProps = {
  blogs: Array<BlogMatter>;
};

const tags = ["Javascript", "Devops", "Walk of Life", "Books", "Web Design"];

const Blogs: React.FC<BlogsProps> = ({ blogs }) => {
  const { textColor } = useCustomColorModeValue();
  return (
    <>
      <Heading
        fontSize={"4xl"}
        fontWeight={"black"}
        textColor={textColor}
        pb={1}
        inlineSize={"max-content"}
      >
        All Blogs
      </Heading>
      <Box my={8} display={{ sm: "none", md: "none", lg: "block" }}>
        <HStack spacing={4} alignItems={"center"}>
          <Text fontSize={"sm"} textColor={textColor}>
            Filter by tags:{" "}
          </Text>
          <HStack spacing={4}>
            {tags.map((tag) => (
              <Text
                key={tag}
                fontSize={"sm"}
                textColor={"blue.500"}
                borderBottomWidth={1}
                borderBottomColor={"blue.500"}
                borderBottomStyle={"dashed"}
              >
                {tag}
              </Text>
            ))}
          </HStack>
        </HStack>
      </Box>
      <Box my={12}>
        <VStack alignItems={"left"} spacing={2}>
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
        {/* <HStack alignItems={"left"} my={4} spacing={4}>
          <Button
            bgColor={"transparent"}
            fontSize={"lg"}
            fontWeight={"bold"}
            iconSpacing={2}
            textColor={textColor}
            leftIcon={<AiOutlineArrowLeft size={"20px"} />}
          >
            Previous
          </Button>
          <Button
            bgColor={"transparent"}
            fontSize={"lg"}
            fontWeight={"bold"}
            iconSpacing={2}
            textColor={textColor}
            rightIcon={<AiOutlineArrowRight size={"20px"} />}
          >
            Next
          </Button>
        </HStack> */}
      </Box>
    </>
  );
};

export default Blogs;

export async function getStaticProps() {
  const blogs = getBlogs();

  return {
    props: {
      blogs,
    },
  };
}
