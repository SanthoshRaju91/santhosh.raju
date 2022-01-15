import { Box } from "@chakra-ui/react";
import { Hero } from "../components/Hero";
import { LatestBlogs } from "../components/LatestBlogs";
import { BlogMatter } from "../common/type";

type HomeProps = {
  blogs: Array<BlogMatter>;
};

const Home: React.FC<HomeProps> = ({ blogs }) => {
  return (
    <>
      <Hero />
      <LatestBlogs blogs={blogs} />
    </>
  );
};

export default Home;
