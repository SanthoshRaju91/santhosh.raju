import { useState } from "react";
import Link from "next/link";
import { Button, Container, HStack, useColorMode } from "@chakra-ui/react";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

import { Image } from "../Image";

const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container
      w={{ sm: "80%", md: "80%", lg: "80%", xl: "80%", "2xl": "60%" }}
      maxW={{ sm: "80%", md: "80%", lg: "80%", xl: "80%", "2xl": "60%" }}
      my={8}
      p={0}
    >
      <HStack alignItems={"center"} justifyContent={"space-between"}>
        <Link href={"/"} passHref>
          <a>
            <Image src="/Logo.svg" alt="Logo" width={250} height={65}></Image>
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
