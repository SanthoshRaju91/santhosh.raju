import { Box } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";

const Home: React.FC = () => {
  return (
    <Box maxW={"80%"} w={"85%"} m={"auto"}>
      <Header />
      <Hero />
    </Box>
  );
};

export { Home };
