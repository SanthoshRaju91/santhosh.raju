import { Box } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { LatestBlogs } from "../components/LatestBlogs";

const Home: React.FC = () => {
  return (
    <Box maxW={"80%"} w={"85%"} m={"auto"}>
      <Header />
      <Hero />
      <LatestBlogs />
    </Box>
  );
};

export { Home };
