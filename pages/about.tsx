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
import { MdWork } from "react-icons/md";
import { SiFreelancer } from "react-icons/si";
import TechBlock from "../components/TechBlock";
import CompanyBlock from "../components/CompanyBlock";
import SocialIcons from "../components/SocialIcons";
import { Image } from "../components/Image";
import Photo from "../assets/Photo.png";
import useCustomColorModeValue from "../common/useCustomColorModeValue";

const About: React.FC = () => {
  const { textColor } = useCustomColorModeValue();
  return (
    <div>
      <Flex
        flexDirection={{
          sm: "column-reverse",
          md: "column-reverse",
          lg: "row",
          xl: "row",
        }}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <VStack
          w={{ sm: "100%", md: "100%", lg: "50%", xl: "50%" }}
          maxW={{ sm: "100%", md: "100%", lg: "50%", xl: "50%" }}
          alignItems={"left"}
        >
          <Heading
            fontSize={{
              sm: "3xl",
              md: "3xl",
              lg: "5xl",
              xl: "5xl",
              "2xl": "5xl",
            }}
            fontWeight={"bold"}
            textColor={textColor}
          >
            Hi I’m Santhosh Raju
          </Heading>
          <Heading fontSize={"lg"} lineHeight={1.8} textColor={textColor}>
            I’m an experienced Full Stack Engineer, who loves to Design, Build &
            Ship Quality Products
          </Heading>
          <Box pt={12} display={"block"}>
            <Text fontSize={"sm"} lineHeight={1.8} textColor={textColor}>
              <b>
                I Design, Develop and Deploy Web applications and productionize
                Machine Learning Models at scale.
              </b>{" "}
              Craft that I have learned and practiced over the past 7 years of
              my professional careers, I have helped multiple organisation and
              clients on their path to Digital products. With Machine Learning &
              AI products on the rise, I’m now focused on succesfully
              production-izing Machine Learning Models from POC to Products.
            </Text>
            <Text pt={6} fontSize={"sm"} lineHeight={1.8} textColor={textColor}>
              I love to play with <b>Raspberry PI’s and reading books,</b> which
              you will find them in my blogs over and over again.
            </Text>
          </Box>
        </VStack>
        <Box
          maxW={{ sm: "100%", md: "100%", lg: "50%", xl: "50%" }}
          w={{ sm: "100%", md: "100%", lg: "50%", xl: "50%" }}
          textAlign={"center"}
          my={{ sm: "10", md: "10" }}
        >
          <Box
            display={"inline-block"}
            w={"280px"}
            h={"280px"}
            bgColor={"teal.300"}
            rounded={"sm"}
          />
        </Box>
      </Flex>

      <Flex
        gap={4}
        flexDirection={{ sm: "column", md: "column", lg: "row", xl: "row" }}
        my={20}
      >
        <Box bgColor={"teal.300"} w={"10px"} rounded={"sm"} shadow={"base"} />
        <VStack
          my={8}
          w={{ sm: "100%", md: "100%", lg: "50%", xl: "50%" }}
          alignItems={"left"}
          spacing={8}
        >
          <Heading fontSize={"2xl"} textColor={textColor}>
            Professional Skills
          </Heading>
          <Text fontSize={"sm"} textColor={textColor} lineHeight={1.8}>
            Over the years I had the opportunity to learn and build applications
            with various programming languages. But I was always interested in
            Designing and Building Web applications. Javascript & its eco system
            is my core skill.
          </Text>
        </VStack>
        <Box w={{ sm: "100%", md: "100%", lg: "50%", xl: "50%" }}>
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
        </Box>
      </Flex>

      <Flex
        gap={4}
        flexDirection={{ sm: "column", md: "column", lg: "row", xl: "row" }}
        my={20}
      >
        <Box bgColor={"teal.300"} w={"10px"} rounded={"sm"} shadow={"base"} />
        <VStack
          my={8}
          w={{ sm: "100%", md: "100%", lg: "50%", xl: "50%" }}
          alignItems={"left"}
          spacing={8}
        >
          <Heading fontSize={"2xl"} textColor={textColor}>
            Work Experience
          </Heading>
          <Text fontSize={"sm"} textColor={textColor} lineHeight={1.8}>
            Currently I’m working as a Full-time professional, who does a
            freelancing jobs if opportunity presents itself.
          </Text>
        </VStack>
        <Box w={{ sm: "100%", md: "100%", lg: "50%" }}>
          <Flex flexDirection={"row"} flexWrap={"wrap"} gap={5} mt={8}>
            <CompanyBlock
              Icon={MdWork}
              name="Rakuten"
              title="Senior Software Engineer"
            />
            <CompanyBlock
              Icon={MdWork}
              name="Deloitte USI"
              title="Consultant"
            />
            <CompanyBlock
              Icon={MdWork}
              name="Quinnox Consultancy"
              title="Software Engineer"
            />
            <CompanyBlock
              Icon={SiFreelancer}
              name="Dwell Optimal"
              title="Freelancer"
            />
          </Flex>
        </Box>
      </Flex>

      <Box
        my={24}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={4}
      >
        <Heading fontSize={"5xl"} fontWeight={"black"} textColor={"teal.300"}>
          Say Hello
        </Heading>
        <Text
          w={{ sm: "100%", md: "100%", lg: "50%" }}
          textAlign={"center"}
          fontSize={"sm"}
          textColor={textColor}
          lineHeight={1.8}
        >
          I am available for Freelance project, Remote work, Job Opportunities
          for just discussing about MLOps / Software Development in general.
        </Text>
        <HStack spacing={2}>
          <FiMail size={"18px"} color="#47bcb1" />
          <Text fontSize={"md"} fontWeight={"bold"} textColor={"teal.300"}>
            santhoshraju.ai@gmail.com
          </Text>
        </HStack>
        <HStack py={10} spacing={4}>
          <Text textColor={textColor}>Connect with me on </Text>
          <SocialIcons />
        </HStack>
      </Box>
    </div>
    // <>
    //   <Flex
    //     pt={16}
    //     gap={16}
    //     flexDirection={{
    //       sm: "column-reverse",
    //       md: "column-reverse",
    //       lg: "row",
    //     }}
    //   >
    //     <Box>
    //       <VStack spacing={8} alignItems={"flex-start"}>
    //         <VStack spacing={2} alignItems={"flex-start"}>
    //           <Heading
    //             fontSize={"3xl"}
    //             fontWeight={"black"}
    //             textColor={"blackAlpha.800"}
    //           >
    //             Hi I&apos;m Santhosh Raju.
    //           </Heading>
    //           <Heading
    //             fontSize={"2xl"}
    //             lineHeight={1.6}
    //             fontWeight={"black"}
    //             textColor={"blackAlpha.800"}
    //           >
    //             I&apos;m an experienced Full Stack Engineer.
    //           </Heading>
    //         </VStack>
    //         <Text fontSize={"sm"} textColor={"blackAlpha.700"} lineHeight={1.8}>
    //           I develop and deploy web applications and productionize Machine
    //           Learning Models at scale. Over the past 7 years of my professional
    //           careers I have helped multiple organisation and clients on their
    //           path to Digital products. With Machine Learning & AI products on
    //           the rise, I’m now focused on succesfully production-izing Machine
    //           Learning Models from POC to Products.
    //         </Text>
    //         <Text fontSize={"sm"} textColor={"blackAlpha.700"} lineHeight={1.8}>
    //           I love to play with Raspberry PI’s and reading books, which you
    //           will find them in my blogs over and over again.
    //         </Text>
    //       </VStack>
    //     </Box>
    //     <Box
    //       width={{ sm: "280px", md: "280px", lg: "full" }}
    //       height={{ sm: "280px", md: "280px", lg: "full" }}
    //     >
    //       <Image
    //         src={Photo}
    //         alt="It's me"
    //         backgroundPosition={"center"}
    //         backgroundRepeat={"no-repeat"}
    //         backgroundSize={"contain"}
    //       />
    //     </Box>
    //   </Flex>
    //   <Flex
    //     my={"40"}
    //     gap={8}
    //     flexDirection={{ sm: "column", md: "column", lg: "row" }}
    //     justifyContent={"space-between"}
    //     justifyItems={"center"}
    //   >
    //     <Box w={{ sm: "100%", md: "100%", lg: "50%" }}>
    //       <VStack alignItems={"flex-start"} spacing={5}>
    //         <Heading
    //           fontSize={"2xl"}
    //           fontWeight={"black"}
    //           textColor={"blackAlpha.700"}
    //         >
    //           Professional Skills
    //         </Heading>
    //         <Text fontSize={"sm"} textColor={"blackAlpha.700"} lineHeight={1.8}>
    //           Over the years I had the opportunity to learn and build
    //           applications with various <b>Tech Stacks</b> and{" "}
    //           <b>Programming Languages</b>. But I was always interested in{" "}
    //           <b>Designing and Developing Web Applications.</b> Javascript and
    //           its eco-system is my core skill.
    //         </Text>
    //       </VStack>
    //     </Box>
    //     <Box w={{ sm: "100%", md: "100%", lg: "50%" }}>
    //       <Flex flexDirection={"row"} flexWrap={"wrap"} gap={5} mt={8}>
    //         <TechBlock skill="Javascript" Icon={DiJavascript} />
    //         <TechBlock skill="Web Design" Icon={DiCss3} />
    //         <TechBlock skill="Node.js" Icon={DiNodejsSmall} />
    //         <TechBlock skill="React.js" Icon={DiReact} />
    //         <TechBlock skill="Angular" Icon={DiAngularSimple} />
    //         <TechBlock skill="Ember" Icon={DiEmber} />
    //         <TechBlock skill="Python" Icon={DiPython} />
    //         <TechBlock skill="Devops" Icon={DiDocker} />
    //         <TechBlock skill="Kubernetes" Icon={DiLinux} />
    //         <TechBlock skill="Machine Learning Ops" Icon={DiAptana} />
    //         <TechBlock skill="SRE" Icon={DiGoogleCloudPlatform} />
    //       </Flex>
    //     </Box>
    //   </Flex>
    //   <Flex
    //     my={"40"}
    //     gap={8}
    //     flexDirection={{ sm: "column", md: "column", lg: "row" }}
    //     justifyContent={"space-between"}
    //     justifyItems={"center"}
    //   >
    //     <Box w={{ sm: "100%", md: "100%", lg: "50%" }}>
    //       <VStack alignItems={"flex-start"} spacing={5}>
    //         <Heading
    //           fontSize={"2xl"}
    //           fontWeight={"black"}
    //           textColor={"blackAlpha.700"}
    //         >
    //           Work Experience
    //         </Heading>
    //         <Text fontSize={"sm"} textColor={"blackAlpha.700"} lineHeight={1.8}>
    //           Currently I’m working as a Full-time professional, who does a
    //           freelancing jobs if opportunity presents itself.
    //         </Text>
    //       </VStack>
    //     </Box>
    // <Box w={{ sm: "100%", md: "100%", lg: "50%" }}>
    //   <Flex flexDirection={"row"} flexWrap={"wrap"} gap={5} mt={8}>
    //     <CompanyBlock
    //       Icon={MdWork}
    //       name="Rakuten"
    //       title="Senior Software Engineer"
    //     />
    //     <CompanyBlock
    //       Icon={MdWork}
    //       name="Deloitte USI"
    //       title="Consultant"
    //     />
    //     <CompanyBlock
    //       Icon={MdWork}
    //       name="Quinnox Consultancy"
    //       title="Software Engineer"
    //     />
    //     <CompanyBlock
    //       Icon={SiFreelancer}
    //       name="Dwell Optimal"
    //       title="Freelancer"
    //     />
    //   </Flex>
    // </Box>
    //   </Flex>

    // <Box
    //   my={"10"}
    //   display={"flex"}
    //   flexDirection={"column"}
    //   alignItems={"center"}
    //   gap={4}
    // >
    //   <Heading
    //     fontSize={"3xl"}
    //     fontWeight={"black"}
    //     textColor={"blackAlpha.700"}
    //   >
    //     Say Hello
    //   </Heading>
    //   <Text
    //     w={{ sm: "100%", md: "100%", lg: "50%" }}
    //     textAlign={"center"}
    //     fontSize={"sm"}
    //     textColor={"blackAlpha.700"}
    //     lineHeight={1.8}
    //   >
    //     I am available for Freelance project, Remote work, Job Opportunities
    //     for just discussing about MLOps / Software Development in general.
    //   </Text>
    //   <HStack spacing={2}>
    //     <FiMail size={"18px"} color="#47bcb1" />
    //     <Text fontSize={"md"} fontWeight={"bold"} textColor={"brand.600"}>
    //       santhoshraju.ai@gmail.com
    //     </Text>
    //   </HStack>
    //   <Box py={10}>
    //     <SocialIcons />
    //   </Box>
    // </Box>
    // </>
  );
};

export default About;
