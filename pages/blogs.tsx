import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { Tag } from "../components/Tag";

const Blogs: React.FC = () => {
  return (
    <Box>
      <Box maxW={"80%"} w={"85%"} m={"auto"} mt={24}>
        <Heading
          fontSize={"2xl"}
          fontWeight={"black"}
          textColor={"blackAlpha.800"}
          pb={1}
          inlineSize={"max-content"}
          borderBottomWidth={1}
          borderBottomColor={"blackAlpha.700"}
        >
          All Blogs
        </Heading>
        <Flex
          mt={8}
          gap={12}
          flexDirection={{ sm: "column", md: "column", lg: "row" }}
        >
          <Box w={{ sm: "100%", md: "100%", lg: "70%" }}>
            <VStack spacing={4}>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </VStack>
            <HStack mt={6}>
              <Button
                bgColor={"transparent"}
                fontSize={"lg"}
                fontWeight={"bold"}
                iconSpacing={2}
                textColor={"blackAlpha.700"}
                _hover={{ bgColor: "transparent", textColor: "blackAlpha.800" }}
                leftIcon={<AiOutlineArrowLeft size={"20px"} />}
              >
                Previous
              </Button>
              <Button
                bgColor={"transparent"}
                fontSize={"lg"}
                fontWeight={"bold"}
                iconSpacing={2}
                textColor={"blackAlpha.700"}
                _hover={{ bgColor: "transparent", textColor: "blackAlpha.800" }}
                rightIcon={<AiOutlineArrowRight size={"20px"} />}
              >
                Next
              </Button>
            </HStack>
          </Box>

          <Box
            w={{ sm: 0, md: 0, lg: "30%" }}
            display={{ sm: "none", md: "none", lg: "block" }}
          >
            <Heading
              fontSize={"lg"}
              fontWeight={"black"}
              textColor={"blackAlpha.800"}
              pb={1}
              inlineSize={"max-content"}
              borderBottomWidth={1}
              borderBottomColor={"blackAlpha.800"}
            >
              Tags
            </Heading>
            <Grid mt={4} templateColumns={"repeat(2, 1fr)"} gap={4}>
              <Tag text="Javascript" />
              <Tag text="Frontend" />
              <Tag text="Ansible" />
              <Tag text="React.js" />
              <Tag text="Devops" />
              <Tag text="Walk of Life" />
              <Tag text="Books" />
            </Grid>
          </Box>
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};

export default Blogs;
