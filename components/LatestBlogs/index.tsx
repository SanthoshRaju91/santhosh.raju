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
        <Box bgColor={"teal.300"} w={"20px"} rounded={"sm"} shadow={"base"} />
        <VStack alignItems={"left"} spacing={16} py={8}>
          <Heading fontSize={"3xl"} textColor={textColor}>
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
    // <Box mt={24}>
    //   <Box>
    //     <Text
    //       fontSize={{ sm: "lg", md: "xl" }}
    //       fontWeight={"bold"}
    //       textColor={"blackAlpha.800"}
    //       borderBottomWidth={1}
    //       inlineSize={"max"}
    //       pb={1}
    //       borderBottomColor={"blackAlpha.800"}
    //     >
    //       Latest Blogs
    //     </Text>
    //   </Box>
    //   <Flex flexDirection={{ sm: "column", md: "column", lg: "row" }} mt={10}>
    //     <VStack spacing={6} maxW={{ sm: "100%", md: "100%", lg: "75%" }}>
    //       {blogs.map((blog, index) => (
    //         <Card
    //           key={index}
    //           title={blog.title}
    //           synopsis={blog.synopsis}
    //           user={blog.author}
    //           userAvatar={blog.authorProfilePic}
    //           published={blog.published}
    //           tags={blog.tags}
    //           slug={blog.slug}
    //         />
    //       ))}
    //     </VStack>
    //     <VStack
    //       ml={8}
    //       maxW={{ sm: "0", md: "0", lg: "25%" }}
    //       display={{ sm: "none", md: "none", lg: "block" }}
    //     >
    //       <Text
    //         fontSize={"md"}
    //         fontWeight={"bold"}
    //         textColor={"blackAlpha.800"}
    //         borderBottomColor={"blackAlpha.800"}
    //         borderBottomWidth={1}
    //         inlineSize={"max"}
    //         pb={1}
    //       >
    //         Tags
    //       </Text>

    //       <Box pt={4}>
    //         <Grid templateColumns={"repeat(2, 1fr)"} gap={4}>
    //           <Tag text="Devops" />
    //           <Tag text="Frontend" />
    //           <Tag text="Ansible" />
    //           <Tag text="React.js" />
    //           <Tag text="Javascript" />
    //           <Tag text="Walk of Life" />
    //           <Tag text="Books" />
    //         </Grid>
    //       </Box>
    //     </VStack>
    //   </Flex>

    //   <Box mt={8}>
    //     <Link href={"/blogs"} passHref>
    //       <a>
    //         <HStack alignItems={"center"} spacing={2} cursor={"pointer"}>
    //           <Text
    //             fontSize={"sm"}
    //             fontWeight={"medium"}
    //             textColor={"blackAlpha.800"}
    //           >
    //             There&apos;s more, right here
    //           </Text>
    //           <BsArrowRight size={"18px"} />
    //         </HStack>
    //       </a>
    //     </Link>
    //   </Box>
    // </Box>
  );
};

export { LatestBlogs };
