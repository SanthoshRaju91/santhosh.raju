import Link from "next/link";
import { Box, HStack } from "@chakra-ui/react";
import { Image } from "../Image";
import LogoLarge from "../../assets/Logo-Large.svg";

const Header: React.FC = () => {
  return (
    <Box maxW={"80%"} w={"85%"} m={"auto"} my={8}>
      <HStack>
        <Link href={"/"} passHref>
          <a>
            <Image src={LogoLarge} alt="Logo" width={300} height={75}></Image>
          </a>
        </Link>
      </HStack>
    </Box>
  );
};

export { Header };
