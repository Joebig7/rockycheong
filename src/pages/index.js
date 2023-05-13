import { Flex, Image, Heading, Text, Box, Link, Icon } from "@chakra-ui/react";
import NextLink from "next/link";
import { GoMarkGithub } from "react-icons/go";
import { SiZhihu } from "react-icons/si";
import { TfiTwitterAlt } from "react-icons/tfi";

export default function Home() {
  return (
    <Flex
      px={4}
      pt={{ base: 0, md: 10 }}
      direction="column"
      w="full"
      align="flex-start"
      gap={8}
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
        fontSize={{ base: "md", md: "xl" }}
        fontFamily="montserrat"
        fontWeight="medium"
        gap={3}
        pb={10}
      >
        <Text>Hi, folks, I'm Rocky.</Text>
        <Text>
          I currently live in Shanghai and mainly work as an backend engineer
          👨‍💻.
        </Text>
        <Text>
          I am also a{" "}
          <Link as={NextLink} href="/blog-list">
            Blogger
          </Link>{" "}
          📝 and a NBA Fan .
        </Text>
        <Text>Last but not least,I also love traveling!</Text>

        <Text>Here are some projects I have made.</Text>
        <Text>You can contact me by the following social media.</Text>
      </Flex>

      <Flex gap={4}>
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
  );
}
