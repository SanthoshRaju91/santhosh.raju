import { Box, HStack, Text, VStack, Heading, Spinner } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import useCustomColorModeValue from "../../common/useCustomColorModeValue";

export interface LinkPreviewProps {
  url: string;
}

export interface Preview {
  title?: string;
  description?: string;
  domain?: string;
  img?: string;
}

const LinkPreview: React.FC<LinkPreviewProps> = ({ url }) => {
  const [preview, setPreview] = useState<Preview>({});
  const [loading, setLoading] = useState(false);
  const { textColor, bgColor } = useCustomColorModeValue();

  useEffect(() => {
    async function fetchLinkPreview(url: string) {
      setLoading(true);
      const response = await fetch("/api/scrape", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });
      const data = await response.json();
      setPreview(data);
      setLoading(false);
    }

    fetchLinkPreview(url);
  }, [url]);

  return (
    <a href={url} target="__blank">
      <Box bgColor={bgColor} p={6} rounded={"base"} shadow={"base"} my={4}>
        {loading ? (
          <Spinner size={"lg"} />
        ) : (
          <HStack spacing={4}>
            <img
              src={preview.img}
              alt={preview.title}
              width={"50px"}
              height={"50px"}
            />
            <VStack spacing={4} alignItems={"left"}>
              <Heading fontSize="base" textColor={textColor}>
                {preview.title}
              </Heading>
              <Text fontSize={"sm"} textColor={textColor} lineHeight={1.4}>
                {preview.description}
              </Text>
            </VStack>
          </HStack>
        )}
      </Box>
    </a>
  );
};

export default LinkPreview;
