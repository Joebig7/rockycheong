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

import { getAllFileForntmatter } from "../lib/blogPosts";

//获取所有文章的frontmatter
export async function getStaticProps() {
  const allPostFrontMatter = await getAllFileForntmatter();

  return {
    props: {
      allPostFrontMatter,
    },
  };
}

function groupArticles(articles) {
  const groupedArticles = articles.reduce((result, current) => {
    const year = new Date(current.publishDate).getFullYear();
    if (!result[year]) {
      result[year] = [];
    }
    result[year].push(current);
    return result;
  }, {});

  for (const key in groupedArticles) {
    groupedArticles[key].sort(
      (a, b) => new Date(b.publishDate) - new Date(a.publishDate)
    );
  }

  return groupedArticles;
}

export default function Articles({ allPostFrontMatter }) {
  const tagBg = useColorModeValue("brand.700", "dark.500");

  const [isSmallerThan] = useMediaQuery("(max-width: 480px)", {
    ssr: true,
    fallback: false,
  });

  const groupedArticles = groupArticles(allPostFrontMatter);
  console.log(groupedArticles);
  return Object.getOwnPropertyNames(groupedArticles)
    .sort((a, b) => b - a)
    .map((obj) => (
      <Flex px={2} direction="column" gap={4}>
        <Heading
          as="h1"
          fontFamily="sans-serif"
          fontSize="4xl"
          fontWeight="900"
          key={obj}
        >
          {obj}
        </Heading>
        {groupedArticles[obj].map((article) => (
          <Flex
            fontSize={{ base: "md", md: "xl" }}
            fontWeight={900}
            justify="space-between"
          >
            <Text> {article.publishDate}</Text>
            <Link
              as={NextLink}
              _hover={{ textDecor: "underline", color: "brand.700" }}
              href={`/posts/${article.slug}`}
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
    ));
}
