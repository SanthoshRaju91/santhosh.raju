import { Box } from "@chakra-ui/react";
import { Hero } from "../components/Hero";
import { LatestBlogs } from "../components/LatestBlogs";

const Home: React.FC = () => {
  return (
    <Box maxW={"80%"} w={"85%"} m={"auto"}>
      <Hero />
      <LatestBlogs />
    </Box>
  );
};

export { Home };
