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
    <Flex direction="column" px="6px" pt="56px">
      <Flex
        direction="column"
        borderBottom="1px"
        borderColor={borderColor}
        boxShadow="sm"
      >
        <Box>
          <Image
            boxSize="100px"
            src="/images/avatar/avatar.jpg"
            alt="Rocky Cheong"
            borderRadius="full"
            border="1px"
            borderColor="brand.100"
          />
        </Box>
        <Heading fontFamily="inter" as="h1" fontSize="48px" fontWeight={600}>
          Rocky
        </Heading>
        <Text mt="24px" fontFamily="inter" fontSize="18px">
          Hi folks,I am a software engineer with 4 years of work experience.😀
        </Text>

        <Text mt="12px" fontFamily="inter" fontSize="18px">
          I am also a{" "}
          <Link as={NextLink} href="/articles">
            Blogger
          </Link>{" "}
          📝 and a NBA Fan 🏀.
        </Text>

        <Text mt="12px" fontFamily="inter" fontSize="18px">
          Last but not least,I also love traveling! ✈️
        </Text>
        <Flex gap={4} mt="28px" mb="40px">
          <Link target="_blank" href="https://www.github.com/Joebig7">
            <Icon boxSize="28px" as={GoMarkGithub} />
          </Link>

          <Link target="_blank" href="https://www.zhihu.com/people/joepop7">
            <Icon boxSize="28px" as={SiZhihu} />
          </Link>

          <Link target="_blank" href="https://twitter.com/Joe39445722">
            <Icon boxSize="28px" as={TfiTwitterAlt} />
          </Link>
        </Flex>
      </Flex>
      <Flex direction="column" mt="46px">
        <Flex direction={"column"} mb="40px" px={{ base: "10px", sm: "0" }}>
          <Heading fontSize="22px" fontWeight={500} mb="16px">
            👨‍💻工作项目
          </Heading>
          <Flex
            column="column"
            flexWrap="wrap"
            justifyContent="center"
            gap="26px"
          >
            {projectLists(projects, "working", textColor)}
          </Flex>
        </Flex>
        <Flex direction={"column"} mb="40px" px={{ base: "10px", sm: "0" }}>
          <Heading fontSize="22px" fontWeight={500} mb="16px">
            🎸个人项目
          </Heading>
          <Flex
            column="column"
            flexWrap="wrap"
            justifyContent="center"
            gap="26px"
          >
            {projectLists(projects, "personal", textColor)}
          </Flex>
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

  return projectArray.map((project) => (
    <Flex
      w={{
        base: "100%",
        sm: "47.12%",
        md: "332px",
      }}
      direction="column"
    >
      <Image borderRadius="xl" objectFit="cover" src={project.img} />

      <Flex direction="column" mt="6px">
        <Heading mb="4px" as="h3" fontFamily="inter" fontSize="18px">
          {project.name}
        </Heading>
        <Text fontSize="16px" color={textColor}>
          {project.description}
        </Text>
      </Flex>
    </Flex>
  ));
}
