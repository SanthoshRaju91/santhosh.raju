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

      <Header />
      <Container
        maxW={{ sm: "xl", md: "3xl", lg: "4xl", xl: "6xl", "2xl": "7xl" }}
        px={6}
        py={10}
      >
        {children}
      </Container>
      <Footer />
    </ChakraProvider>
  );
};

export default Layout;
