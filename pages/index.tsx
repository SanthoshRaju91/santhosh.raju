import { Box } from "@chakra-ui/react";
import { Home } from "./Home";
import { Footer } from "../components/Footer";
import { BlogMatter } from "../common/type";
import getBlogs from "../common/getBlogs";

type IndexProps = {
  blogs: Array<BlogMatter>;
};
const Index: React.FC<IndexProps> = ({ blogs }) => {
  return (
    <Box>
      <Home blogs={blogs} />
      <Footer />
    </Box>
  );
};

export async function getStaticProps() {
  const blogs = getBlogs();

  return {
    props: {
      blogs,
    },
  };
}

export default Index;
