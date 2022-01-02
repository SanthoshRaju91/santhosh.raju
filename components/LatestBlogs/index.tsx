import { Box, Flex, Grid, HStack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Card } from "../Card";
import { Tag } from "../Tag";

const LatestBlogs: React.FC = () => {
  return (
    <Box mt={24}>
      <Box>
        <Text
          fontSize={{ sm: "lg", md: "xl" }}
          fontWeight={"bold"}
          textColor={"blackAlpha.800"}
          borderBottomWidth={1}
          inlineSize={"max"}
          pb={1}
          borderBottomColor={"blackAlpha.800"}
        >
          Latest Blogs
        </Text>
      </Box>
      <Flex flexDirection={{ sm: "column", md: "column", lg: "row" }} mt={10}>
        <VStack spacing={6} maxW={{ sm: "100%", md: "100%", lg: "75%" }}>
          <Card />
          <Card />
          <Card />
        </VStack>
        <VStack
          ml={8}
          maxW={{ sm: "0", md: "0", lg: "25%" }}
          display={{ sm: "none", md: "none", lg: "block" }}
        >
          <Text
            fontSize={"md"}
            fontWeight={"bold"}
            textColor={"blackAlpha.800"}
            borderBottomColor={"blackAlpha.800"}
            borderBottomWidth={1}
            inlineSize={"max"}
            pb={1}
          >
            Tags
          </Text>

          <Box pt={4}>
            <Grid templateColumns={"repeat(2, 1fr)"} gap={4}>
              <Tag text="Devops" />
              <Tag text="Frontend" />
              <Tag text="Ansible" />
              <Tag text="React.js" />
              <Tag text="Javascript" />
              <Tag text="Walk of Life" />
              <Tag text="Books" />
            </Grid>
          </Box>
        </VStack>
      </Flex>

      <Box mt={8}>
        <Link href={"/blogs"} passHref>
          <HStack alignItems={"center"} spacing={2} cursor={"pointer"}>
            <Text
              fontSize={"sm"}
              fontWeight={"medium"}
              textColor={"blackAlpha.800"}
            >
              There&apos;s more, right here
            </Text>
            <BsArrowRight size={"18px"} />
          </HStack>
        </Link>
      </Box>
    </Box>
  );
};

export { LatestBlogs };
