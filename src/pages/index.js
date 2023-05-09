import { Flex, Image, Heading, Text, Box, Link, Icon } from "@chakra-ui/react";
import NextLink from "next/link";
import { GoMarkGithub } from "react-icons/go";
import { SiZhihu } from "react-icons/si";
import { TfiTwitterAlt } from "react-icons/tfi";

export default function Home() {
  return (
    <Flex
      px={4}
      pt={10}
      direction="column"
      w="full"
      align="center"
      gap={8}
      h="100vh"
    >
      <Box>
        <Image
          boxSize="100px"
          src="/images/avatar/avatar.jpg"
          alt="Rocky Chenong"
          borderRadius="full"
          border="1px"
          borderColor="brand.100"
        />
      </Box>

      <Flex
        direction="column"
        fontSize="xl"
        fontFamily="montserrat"
        fontWeight="medium"
        gap={3}
        pb={10}
      >
        <Text>Hi, folks, I'm Rocky.</Text>
        <Text>I live in Shanghai and work as an backend engineer 👨‍💻.</Text>
        <Text>
          I am also a{" "}
          <Link as={NextLink} href="/blog-list">
            Blogger
          </Link>{" "}
          📝 and Traveler 🌍.
        </Text>
        <Text>Here are some projects I have made.</Text>
      </Flex>

      <Flex gap={6} w="full" alignSelf="flex-end">
        <Link target="_blank" href="https://www.github.com">
          <Icon boxSize="28px" as={GoMarkGithub} />
        </Link>

        <Link target="_blank" href="https://www.github.com">
          <Icon boxSize="28px" as={SiZhihu} />
        </Link>

        <Link target="_blank" href="https://www.github.com">
          <Icon boxSize="28px" as={TfiTwitterAlt} />
        </Link>
      </Flex>
    </Flex>
  );
}
