import React from "react";
import { NextPage } from "next";
import {
  Box,
  Code,
  Heading,
  HStack,
  Text,
  OrderedList,
  VStack,
  Link,
} from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import { IoIosShareAlt } from "react-icons/io";
import getBlogs from "../../common/getBlogs";
import { getBlogBySlug } from "../../common/getBlog";
import { Blog } from "../../common/type";
import { UserAvatar } from "../../components/Avatar";
import { Published } from "../../components/Published";
import { Image } from "../../components/Image";

type BlogProps = {
  blog: Blog;
};

const components = {
  blockquote({ children }: any) {
    return (
      <Box pl={6} my={6} borderLeftWidth={4} borderLeftColor={"blue.500"}>
        <Text
          fontWeight={"semibold"}
          textColor={"blackAlpha.500"}
          fontStyle={"italic"}
        >
          {children}
        </Text>
      </Box>
    );
  },

  b({ children }: any) {
    return <Text fontWeight={"bold"}>{children}</Text>;
  },

  p({ children }: any) {
    return (
      <Text fontSize={"md"} textColor={"blackAlpha.700"} lineHeight={8}>
        {children}
      </Text>
    );
  },

  h1({ children }: any) {
    return (
      <Heading
        fontSize={"4xl"}
        fontWeight={"black"}
        textColor={"blackAlpha.800"}
        my={4}
      >
        {children}
      </Heading>
    );
  },

  h2({ children }: any) {
    return (
      <Heading
        fontSize={"3xl"}
        fontWeight={"bold"}
        textColor={"blackAlpha.800"}
      >
        {children}
      </Heading>
    );
  },

  h3({ children }: any) {
    return (
      <Heading
        fontSize={"2xl"}
        fontWeight={"black"}
        textColor={"blackAlpha.800"}
        my={6}
      >
        {children}
      </Heading>
    );
  },

  h4({ children }: any) {
    return (
      <Heading fontSize={"lg"} fontWeight={"bold"} textColor={"blackAlpha.800"}>
        {children}
      </Heading>
    );
  },

  h5({ children }: any) {
    return (
      <Heading fontSize={"md"} fontWeight={"bold"} textColor={"blackAlpha.600"}>
        {children}
      </Heading>
    );
  },

  code({ children }: any) {
    return (
      <Code fontFamily={"monospace"} px={2} rounded={"sm"}>
        {children}
      </Code>
    );
  },

  img({ src, alt }: any) {
    return (
      <Box w={"85%"} mx={"auto"} my={8}>
        <img src={src} alt={alt} />
      </Box>
    );
  },

  ol({ children }: any) {
    return <OrderedList ml={8}>{children}</OrderedList>;
  },
};

const Share: React.FC = () => {
  return (
    <Box bgColor={"gray.200"} p={6} shadow={"md"} rounded={"md"}>
      <HStack alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <VStack alignItems={"flex-start"} spacing={1}>
            <Heading
              fontSize={"xl"}
              my={2}
              fontWeight={"black"}
              textColor={"blackAlpha.800"}
            >
              Do Share It.
            </Heading>
            <Text fontSize={"sm"} textColor={"blackAlpha.700"}>
              If you liked this post. Please consider sharing with your friends,
              colleagues or social networks.
            </Text>
            <Text fontSize={"sm"} textColor={"blackAlpha.700"}>
              If not send me a feedback{" "}
              <Link
                href="mailto:santhoshraju.ai@gmail.com"
                textColor={"blue.700"}
                borderBottomWidth={1}
                borderBottomColor={"blue.700"}
                _hover={{
                  borderBottomWidth: 1,
                  borderBottomColor: "blue.800",
                  textColor: "blue.800",
                }}
              >
                here
              </Link>
              . I will surely improve.
            </Text>
          </VStack>
        </Box>
        <Box>
          <Link>
            <IoIosShareAlt size={"48px"} />
          </Link>
        </Box>
      </HStack>
    </Box>
  );
};

const Blog: NextPage<BlogProps> = ({ blog }) => {
  return (
    <Box maxW={"80%"} w={"75%"} m={"auto"} mt={24}>
      <Heading
        fontSize={"3xl"}
        fontWeight={"black"}
        textColor={"blackAlpha.800"}
      >
        {blog.meta.title}
      </Heading>
      <HStack spacing={10} alignItems={"center"} mt={6}>
        <UserAvatar
          imageSrc={blog.meta.authorProfilePic}
          userName={blog.meta.author}
        />
        <Published publishedDate={blog.meta.published} />
      </HStack>
      <Box my={16}>
        <ReactMarkdown skipHtml={true} components={components}>
          {blog.content}
        </ReactMarkdown>
      </Box>
      <Share />
    </Box>
  );
};

export default Blog;

type StaticProps = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: StaticProps) {
  const blog = getBlogBySlug(params.slug);

  return {
    props: {
      blog,
    },
  };
}

export async function getStaticPaths() {
  const blogs = getBlogs();
  return {
    paths: blogs.map((blog) => ({
      params: {
        slug: blog.slug,
      },
    })),
    fallback: false,
  };
}
