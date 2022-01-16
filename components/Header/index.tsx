import { useState } from "react";
import Link from "next/link";
import { Box, Button, Container, HStack, useColorMode } from "@chakra-ui/react";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

import { Image } from "../Image";

const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container
      maxW={{ sm: "xl", md: "3xl", lg: "4xl", xl: "6xl", "2xl": "7xl" }}
      px={6}
      py={10}
    >
      <HStack alignItems={"center"} justifyContent={"space-between"}>
        <Link href={"/"} passHref>
          <a>
            <Image src="/Logo.svg" alt="Logo" width={230} height={65}></Image>
          </a>
        </Link>
        <Button
          variant={"unstyled"}
          leftIcon={
            colorMode === "dark" ? (
              <RiSunLine size={"34px"} />
            ) : (
              <RiMoonLine size={"34px"} />
            )
          }
          onClick={toggleColorMode}
        ></Button>
      </HStack>
    </Container>
  );
};

export { Header };
