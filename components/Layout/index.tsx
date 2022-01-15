import React from "react";
import { Box, ChakraProvider, Container } from "@chakra-ui/react";
import { theme } from "../../theme";
import Head from "next/head";
import { Header } from "../Header";
import { Footer } from "../Footer";

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link rel="favicon" href="/favicon.ico"></link>
        <title>santhoshraju.dev</title>
      </Head>
      <Box>
        <Header />
        <Container
          w={{ sm: "80%", md: "80%", lg: "80%", xl: "80%", "2xl": "60%" }}
          maxW={{ sm: "80%", md: "80%", lg: "80%", xl: "80%", "2xl": "60%" }}
          my={10}
        >
          {children}
        </Container>
        <Footer />
      </Box>
    </ChakraProvider>
  );
};

export default Layout;
