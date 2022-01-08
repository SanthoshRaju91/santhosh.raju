import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/800.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme";
import { Header } from "../components/Header";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico"></link>
        <title>santhoshraju.dev</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
