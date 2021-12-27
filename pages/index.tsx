import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { Home } from "./Home";
import { Footer } from "../components/Footer";

function Index() {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico"></link>
        <title>santhoshraju.dev</title>
      </Head>
      <Box>
        <Home />
        <Footer />
      </Box>
    </div>
  );
}

export default Index;
