import { HStack, Text } from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import useCustomColorModeValue from "../../common/useCustomColorModeValue";

const SocialIcons: React.FC = () => {
  const { textColor } = useCustomColorModeValue();
  return (
    <HStack spacing={6}>
      <a href="https://github.com/SanthoshRaju91" rel="noopener">
        <Text textColor={textColor}>
          <BsGithub size={"22px"} />
        </Text>
      </a>
      <a
        href="https://www.linkedin.com/in/santhosh-nagaraj-9558b0157/"
        rel="noopener"
      >
        <Text textColor={textColor}>
          <BsLinkedin size={"22px"} />
        </Text>
      </a>
      <a href="https://twitter.com/santhoshraju2" rel="noopener">
        <Text textColor={textColor}>
          <BsTwitter size={"22px"} />
        </Text>
      </a>
    </HStack>
  );
};

export default SocialIcons;
