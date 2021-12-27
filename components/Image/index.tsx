import NextImage from "next/image";
import { chakra } from "@chakra-ui/react";

const Image = chakra(NextImage, {
  baseStyle: { maxH: 120, maxW: 120 },
  shouldForwardProp: (prop) =>
    [
      "width",
      "height",
      "src",
      "alt",
      "quality",
      "placholder",
      "blurDataURL",
      "loader",
    ].includes(prop),
});

export { Image };
