import {
  Flex,
  Heading,
  Text,
  Link,
  Image,
  Divider,
  Box,
  AbsoluteCenter,
  AspectRatio,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";

import { getAllFileFrontmatter } from "../lib/blog-posts-utils";

//获取所有文章的frontmatter
export async function getStaticProps() {
  const allPostFrontMatter = await getAllFileFrontmatter();
  return {
    props: {
      allPostFrontMatter,
    },
  };
}

function TopArticle({ allPostFrontMatter, bgColor }) {
  console.log(`allPostFrontMatter ${JSON.stringify(allPostFrontMatter)}`)
  let topArticleArr = allPostFrontMatter.filter((article) => article.isTop);
  if (topArticleArr.length === 0) {
    return null;
  }
  let topArticle = topArticleArr[0];
  return (
    <Flex direction="column">
      <Box position="relative" mt="20px" px={{ base: "18px", sm: "6px" }}>
        <Divider />
        <AbsoluteCenter bg={bgColor} color="gray.400" px="4">
          【置顶文章】
        </AbsoluteCenter>
      </Box>

      <Flex mt={4} direction="column" px={{ base: "18px", sm: "6px" }}>
        <Link
          as={NextLink}
          href={`/posts/${topArticle.slug}`}
          _hover={{ textDecor: "none" }}
        >
          <AspectRatio ratio={21 / 9}>
            <Image
              src={topArticle.cover}
              alt="top article cover"
              objectFit="cover"
              borderRadius="xl"
              boxShadow="xl"
            />
          </AspectRatio>

          <Heading as="h1" mt={4} fontSize="22px">
            {topArticle.title}
          </Heading>

          <Text noOfLines={2} mt={2}>
            {topArticle.description}
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
}

export default function Articles({ allPostFrontMatter }) {
  const bgColor = useColorModeValue("brand.background", "dark.background");
  const color = useColorModeValue("brand.foreground", "dark.foreground");

  return (
    <Flex direction="column" maxWidth="680px">
      <TopArticle allPostFrontMatter={allPostFrontMatter} bgColor={bgColor} />

      <Box
        position="relative"
        mt={16}
        mb="-12px"
        px={{ base: "18px", sm: "6px" }}
      >
        <Divider />
        <AbsoluteCenter bg={bgColor} color="gray.400" px="4">
          【从新到旧浏览】
        </AbsoluteCenter>
      </Box>
      {allPostFrontMatter
        .sort((a, b) => {
          let dateA = new Date(a.publishDate);
          let dateB = new Date(b.publishDate);
          if (dateA > dateB) {
            return -1;
          } else {
            return 1;
          }
        })
        .map((article) => (
          <Flex
            direction="column"
            my={6}
            mx="auto"
            px={{ base: "18px", sm: "6px" }}
            key={article.id}
          >
            <Flex direction="column">
              <Link
                as={NextLink}
                href={`/posts/${article.slug}`}
                _hover={{ textDecor: "none" }}
              >
                <Heading as="h1" fontSize="22px">
                  {article.title}
                </Heading>
              </Link>

              <Text pt={2} color={color} noOfLines={2}>
                {article.description}
              </Text>
              <Text pt={1} color="gray.400">
                {article.publishDate}
              </Text>
            </Flex>
          </Flex>
        ))}
    </Flex>
  );
}
