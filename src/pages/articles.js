import {
  Tag,
  Flex,
  Text,
  Heading,
  Link,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import NextLink from "next/link";
export default function Articles({ articles }) {
  const tagBg = useColorModeValue("brand.700", "dark.500");

  const [isSmallerThan] = useMediaQuery("(max-width: 480px)", {
    ssr: true,
    fallback: false,
  });

  const artiles = [];

  async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
      props: {
        allPostsData,
      },
    };
  }

  return (
    <>
      <Flex px={2} direction="column" gap={4}>
        <Heading
          as="h1"
          pb={4}
          fontFamily="sans-serif"
          fontSize="4xl"
          fontWeight="900"
        >
          2022
        </Heading>

        {artiles.map((article) => (
          <Flex
            fontSize={{ base: "md", md: "xl" }}
            fontWeight={900}
            justify="space-between"
          >
            <Text> {article.publishDate}</Text>
            <Link
              as={NextLink}
              _hover={{ textDecor: "underline", color: "brand.700" }}
              href="/"
              pr={{ base: "10px", md: "200px" }}
              width="70%"
            >
              {article.title}
            </Link>

            <Tag
              size="lg"
              bg={tagBg}
              color="white"
              fontWeight="600"
              hidden={isSmallerThan && "hidden"}
              h="10px"
            >
              {article.tag}
            </Tag>
          </Flex>
        ))}
      </Flex>
    </>
  );
}
