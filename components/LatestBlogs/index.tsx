import { Box, Grid, HStack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Card } from "../Card";
import { Tag } from "../Tag";

const LatestBlogs: React.FC = () => {
  return (
    <Box mt={24}>
      <Text
        fontSize={"2xl"}
        fontWeight={"bold"}
        textColor={"gray.700"}
        borderBottomWidth={1}
        pb={2}
        inlineSize={"max"}
        borderBottomColor={"gray.700"}
      >
        Latest Blogs
      </Text>
      <HStack spacing={12} mt={10} alignItems={"flex-start"}>
        <VStack maxW={"75%"} w={"75%"} spacing={6} alignItems={"flex-start"}>
          <Card />
          <Card />
          <Card />
        </VStack>
        <VStack maxW={"25%"} w={"25%"} alignItems={"flex-start"}>
          <Text
            fontSize={"sm"}
            fontWeight={"semibold"}
            textColor={"gray.700"}
            pb={1}
            borderBottomWidth={1}
            inlineSize={"max"}
            borderBottomColor={"gray.700"}
          >
            Tags
          </Text>
          <Box>
            <Grid templateColumns={"repeat(2, 1fr)"} gap={4} mt={4}>
              <Tag text="Devops" />
              <Tag text="Frontend" />
              <Tag text="Ansible" />
              <Tag text="Kubernetes" />
              <Tag text="Walk of Life" />
              <Tag text="Books" />
            </Grid>
          </Box>
        </VStack>
      </HStack>
      <Box>
        <Link href={"/blogs"} passHref>
          <HStack mt={4}>
            <Text
              fontSize={"lg"}
              fontWeight={"normal"}
              textColor={"gray.800"}
              px={1}
              inlineSize={"max-content"}
              borderBottomWidth={1}
              borderBottomColor={"gray.800"}
            >
              There&apos;s more, right her
            </Text>
            <BsArrowRight size={"24px"} />
          </HStack>
        </Link>
      </Box>
    </Box>
  );
};

export { LatestBlogs };
