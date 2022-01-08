import { Box, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import {
  DiJavascript,
  DiCss3,
  DiDocker,
  DiPython,
  DiReact,
  DiNodejsSmall,
  DiAngularSimple,
  DiGoogleCloudPlatform,
  DiLinux,
  DiAptana,
  DiEmber,
} from "react-icons/di";
import { FiMail } from "react-icons/fi";
import TechBlock from "../components/TechBlock";
import CompanyBlock from "../components/CompanyBlock";
import { SocialIcons } from "../components/Footer";
import { Image } from "../components/Image";
import Photo from "../assets/Photo.png";

const About: React.FC = () => {
  return (
    <Box maxW={"80%"} w={"85%"} m={"auto"}>
      <Flex
        pt={16}
        gap={16}
        flexDirection={{
          sm: "column-reverse",
          md: "column-reverse",
          lg: "row",
        }}
      >
        <Box>
          <VStack spacing={8} alignItems={"flex-start"}>
            <VStack spacing={2} alignItems={"flex-start"}>
              <Heading
                fontSize={"3xl"}
                fontWeight={"black"}
                textColor={"blackAlpha.800"}
              >
                Hi I&apos;m Santhosh Raju.
              </Heading>
              <Heading
                fontSize={"2xl"}
                lineHeight={1.6}
                fontWeight={"black"}
                textColor={"blackAlpha.800"}
              >
                I&apos;m an experienced Full Stack Engineer.
              </Heading>
            </VStack>
            <Text fontSize={"sm"} textColor={"blackAlpha.700"} lineHeight={1.8}>
              I develop and deploy web applications and productionize Machine
              Learning Models at scale. Over the past 7 years of my professional
              careers I have helped multiple organisation and clients on their
              path to Digital products. With Machine Learning & AI products on
              the rise, I’m now focused on succesfully production-izing Machine
              Learning Models from POC to Products.
            </Text>
            <Text fontSize={"sm"} textColor={"blackAlpha.700"} lineHeight={1.8}>
              I love to play with Raspberry PI’s and reading books, which you
              will find them in my blogs over and over again.
            </Text>
          </VStack>
        </Box>
        <Box
          width={{ sm: "280px", md: "280px", lg: "full" }}
          height={{ sm: "280px", md: "280px", lg: "full" }}
        >
          <Image
            src={Photo}
            alt="It's me"
            backgroundPosition={"center"}
            backgroundRepeat={"no-repeat"}
            backgroundSize={"contain"}
          />
        </Box>
      </Flex>
      <Flex
        my={"40"}
        gap={8}
        flexDirection={{ sm: "column", md: "column", lg: "row" }}
      >
        <VStack alignItems={"flex-start"} spacing={5}>
          <Heading
            fontSize={"2xl"}
            fontWeight={"black"}
            textColor={"blackAlpha.700"}
          >
            Professional Skills
          </Heading>
          <Text fontSize={"sm"} textColor={"blackAlpha.700"} lineHeight={1.8}>
            Over the years I had the opportunity to learn and build applications
            with various <b>Tech Stacks</b> and <b>Programming Languages</b>.
            But I was always interested in{" "}
            <b>Designing and Developing Web Applications.</b> Javascript and its
            eco-system is my core skill.
          </Text>
        </VStack>

        <Flex flexDirection={"row"} flexWrap={"wrap"} gap={5} mt={8}>
          <TechBlock skill="Javascript" Icon={DiJavascript} />
          <TechBlock skill="Web Design" Icon={DiCss3} />
          <TechBlock skill="Node.js" Icon={DiNodejsSmall} />
          <TechBlock skill="React.js" Icon={DiReact} />
          <TechBlock skill="Angular" Icon={DiAngularSimple} />
          <TechBlock skill="Ember" Icon={DiEmber} />
          <TechBlock skill="Python" Icon={DiPython} />
          <TechBlock skill="Devops" Icon={DiDocker} />
          <TechBlock skill="Kubernetes" Icon={DiLinux} />
          <TechBlock skill="Machine Learning Ops" Icon={DiAptana} />
          <TechBlock skill="SRE" Icon={DiGoogleCloudPlatform} />
        </Flex>
      </Flex>
      <Box my={"40"}>
        <VStack alignItems={"flex-start"} spacing={5}>
          <Heading
            fontSize={"2xl"}
            fontWeight={"black"}
            textColor={"blackAlpha.700"}
          >
            Work Experience
          </Heading>
          <Text fontSize={"sm"} textColor={"blackAlpha.700"}>
            Currently I’m working as a Full-time professional, who does a
            freelancing jobs if opportunity presents itself.
          </Text>
        </VStack>

        <Flex
          flexDirection={{ sm: "column", md: "column", lg: "row" }}
          flexWrap={"wrap"}
          gap={4}
          mt={8}
        >
          <CompanyBlock
            name="Rakuten"
            title="Senior Software Engineer"
            duration="Nov 2018 - Present"
          />
          <CompanyBlock
            name="Deloitte USI"
            title="Consultant"
            duration="May 2016 - Nov 2018"
          />
          <CompanyBlock
            name="Quinnox Consulting"
            title="Software Engineer"
            duration="Mar 2014 - Apr 2016"
          />
        </Flex>
      </Box>

      <Box
        my={"10"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={4}
      >
        <Heading
          fontSize={"3xl"}
          fontWeight={"black"}
          textColor={"blackAlpha.700"}
        >
          Say Hello
        </Heading>
        <Text
          w={{ sm: "100%", md: "100%", lg: "50%" }}
          textAlign={"center"}
          fontSize={"sm"}
          textColor={"blackAlpha.700"}
          lineHeight={1.8}
        >
          I am available for Freelance project, Remote work, Job Opportunities
          for just discussing about MLOps / Software Development in general.
        </Text>
        <HStack spacing={2}>
          <FiMail size={"18px"} color="#47bcb1" />
          <Text fontSize={"md"} fontWeight={"bold"} textColor={"brand.600"}>
            santhoshraju.ai@gmail.com
          </Text>
        </HStack>
        <Box py={10}>
          <SocialIcons />
        </Box>
      </Box>
    </Box>
  );
};

export default About;