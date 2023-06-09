import {
  Flex,
  Image,
  Heading,
  Text,
  Box,
  Link,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";

import NextLink from "next/link";
import { GoMarkGithub } from "react-icons/go";
import { SiZhihu } from "react-icons/si";
import { TfiTwitterAlt } from "react-icons/tfi";
import projects from "../data/projects";

export default function Home() {
  const borderColor = useColorModeValue("gray.200", "gray.800");
  const textColor = useColorModeValue("#525252", "#D4D4D4");

  return (
    <Flex direction="column" pt={14}>
      <Flex
        direction="column"
        borderBottom="1px"
        borderColor={borderColor}
        boxShadow="sm"
        px="6px"
      >
        <Box>
          <Image
            boxSize="100px"
            src="/images/avatar/avatar.jpg"
            alt="Rocky Cheong"
            borderRadius="full"
            border="1px"
            borderColor="brand.secondary"
          />
        </Box>
        <Heading as="h1" fontSize="48px" fontWeight={600}>
          Rocky
        </Heading>
        <Text mt={6} fontSize="lg">
          Hi folks,I am a software engineer with 4 years of work experience.😀
        </Text>

        <Text mt={3} fontSize="lg">
          I am also a{" "}
          <Link as={NextLink} href="/articles">
            Blogger
          </Link>{" "}
          📝 and a NBA Fan 🏀.
        </Text>

        <Text mt={3} fontSize="lg">
          Last but not least,I also love traveling! ✈️
        </Text>
        <Flex gap={4} mt={7} mb={10}>
          <Link target="_blank" href="https://www.github.com/Joebig7">
            <Icon boxSize={7} as={GoMarkGithub} />
          </Link>

          <Link target="_blank" href="https://www.zhihu.com/people/joepop7">
            <Icon boxSize={7} as={SiZhihu} />
          </Link>

          <Link target="_blank" href="https://twitter.com/Joe39445722">
            <Icon boxSize={7} as={TfiTwitterAlt} />
          </Link>
        </Flex>
      </Flex>
      <Flex direction="column" mt={12}>
        <Flex direction={"column"} mb="40px" px={{ base: 2.5, md: "0" }}>
          <Heading
            fontSize="2xl"
            fontFamily="noto serif sc"
            fontWeight={500}
            mb="16px"
          >
            👨‍💻工作项目
          </Heading>
          {projectLists(projects, "working", textColor)}
        </Flex>
        <Flex direction={"column"} mb="40px" px={{ base: "10px", sm: "0" }}>
          <Heading
            fontSize="2xl"
            fontFamily="noto serif sc"
            fontWeight={500}
            mb={4}
          >
            🎸个人项目
          </Heading>
          {projectLists(projects, "personal", textColor)}
        </Flex>
      </Flex>
    </Flex>
  );
}

function projectLists(projects, type, textColor) {
  let projectArray;

  if (type == "working") {
    projectArray = projects.working;
  } else if (type == "personal") {
    projectArray = projects.personal;
  }

  return (
    <Flex column="column" flexWrap="wrap" justifyContent="center" gap="26px">
      {projectArray.map((project) => (
        <Flex
          w={{
            base: "100%",
            md: "47.12%",
          }}
          direction="column"
          key={project.name}
        >
          <Image borderRadius="xl" objectFit="cover" src={project.img} />

          <Flex direction="column" mt="6px">
            <Heading mb="4px" as="h3" fontSize="18px">
              {project.name}
            </Heading>
            <Text fontSize="16px" color={textColor}>
              {project.description}
            </Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}
