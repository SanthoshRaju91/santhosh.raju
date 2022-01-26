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
import { AiOutlineTag } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";
import getBlogs from "../../common/getBlogs";
import { getBlogBySlug } from "../../common/getBlog";
import { Blog } from "../../common/type";
import { UserAvatar } from "../../components/Avatar";
import { Published } from "../../components/Published";
import { Image } from "../../components/Image";
import useCustomColorModeValue from "../../common/useCustomColorModeValue";
import LinkPreview from "../../components/LinkPreview";

type BlogProps = {
  blog: Blog;
};

const components = {
  blockquote({ children }: any) {
    return (
      <Box pl={6} my={6} borderLeftWidth={4} borderLeftColor={"blue.500"}>
        <Text fontWeight={"semibold"} fontStyle={"italic"}>
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
      <Text fontSize={"md"} lineHeight={8}>
        {children}
      </Text>
    );
  },

  h1({ children }: any) {
    return (
      <Heading fontSize={"4xl"} fontWeight={"black"} my={4}>
        {children}
      </Heading>
    );
  },

  h2({ children }: any) {
    return (
      <Heading fontSize={"3xl"} fontWeight={"bold"}>
        {children}
      </Heading>
    );
  },

  h3({ children }: any) {
    return (
      <Heading fontSize={"2xl"} fontWeight={"black"} my={6}>
        {children}
      </Heading>
    );
  },

  h4({ children }: any) {
    return (
      <Heading fontSize={"lg"} fontWeight={"bold"}>
        {children}
      </Heading>
    );
  },

  h5({ children }: any) {
    return (
      <Heading fontSize={"md"} fontWeight={"bold"}>
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

  a({ href }: any) {
    return <LinkPreview url={href} />;
  },
};

const Share: React.FC = () => {
  const { textColor, bgColor } = useCustomColorModeValue();
  return (
    <Box bgColor={bgColor} p={6} shadow={"md"} rounded={"md"}>
      <VStack alignItems={"flex-start"} spacing={1}>
        <Link>
          <HStack spacing={1} my={2}>
            <IoIosShareAlt size={24} />
            <Heading
              fontSize={"xl"}
              my={2}
              fontWeight={"black"}
              textColor={textColor}
            >
              Share this blog
            </Heading>
          </HStack>
        </Link>

        <Text fontSize={"sm"} textColor={textColor} lineHeight={1.8}>
          If you liked this post. Please consider sharing with your friends,
          colleagues or social networks. If not send me a feedback{" "}
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
          . I will surely improve myself.
        </Text>
      </VStack>
    </Box>
  );
};

const Blog: NextPage<BlogProps> = ({ blog }) => {
  const { textColor } = useCustomColorModeValue();

  function getBlogTags() {
    if (blog.meta) {
      if (blog.meta.tags && Array.isArray(blog.meta.tags)) {
        return blog.meta.tags.map((tag) => (
          <Text
            key={tag}
            fontSize={"xs"}
            textColor={"blue.500"}
            borderBottomWidth={1}
            borderBottomColor={"blue.500"}
            borderBottomStyle={"dashed"}
          >
            {tag}
          </Text>
        ));
      }
    }

    return null;
  }

  return (
    <>
      <Heading fontSize={"4xl"} fontWeight={"black"} textColor={textColor}>
        {blog.meta.title}
      </Heading>
      <HStack spacing={10} alignItems={"center"} mt={6}>
        <UserAvatar
          imageSrc={blog.meta.authorProfilePic}
          userName={blog.meta.author}
        />
        <Published publishedDate={blog.meta.published} />
      </HStack>
      <HStack spacing={2} my={8}>
        <HStack spacing={1}>
          <AiOutlineTag size={14} />
          <Text fontSize={"xs"} textColor={textColor}>
            Tags:{" "}
          </Text>
        </HStack>
        <HStack>{getBlogTags()}</HStack>
      </HStack>
      <Box my={16}>
        <ReactMarkdown skipHtml={true} components={components}>
          {blog.content}
        </ReactMarkdown>
      </Box>
      <Share />
    </>
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
