import { Box } from "@chakra-ui/react";
import { Hero } from "../components/Hero";
import { LatestBlogs } from "../components/LatestBlogs";
import { BlogMatter } from "../common/type";

type HomeProps = {
  blogs: Array<BlogMatter>;
};

const Home: React.FC<HomeProps> = ({ blogs }) => {
  return (
    <Box maxW={"80%"} w={"85%"} m={"auto"}>
      <Hero />
      <LatestBlogs blogs={blogs} />
    </Box>
  );
};

export { Home };
