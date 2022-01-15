import Link from "next/link";
import { Box, Container, HStack } from "@chakra-ui/react";
import { Image } from "../Image";

const Header: React.FC = () => {
  return (
    <Container
      w={{ sm: "80%", md: "80%", lg: "80%", xl: "80%", "2xl": "60%" }}
      maxW={{ sm: "80%", md: "80%", lg: "80%", xl: "80%", "2xl": "60%" }}
      my={8}
      p={0}
    >
      <HStack>
        <Link href={"/"} passHref>
          <a>
            <Image src="/Logo.svg" alt="Logo" width={250} height={65}></Image>
          </a>
        </Link>
      </HStack>
    </Container>
  );
};

export { Header };
