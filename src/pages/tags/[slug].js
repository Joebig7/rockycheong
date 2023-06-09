import {
  getAllTagsPath,
  getFileFrontmatterByTag,
} from "../../lib/blog-posts-utils";
import {
  Flex,
  Heading,
  Text,
  Link,
  useColorModeValue,
  Tag,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

import { tags } from "../../data/tags";

export const getStaticProps = async ({ params }) => {
  const frontmatterData = await getFileFrontmatterByTag(params.slug);
  return {
    props: {
      frontmatterData,
    },
  };
};

export async function getStaticPaths() {
  const paths = getAllTagsPath();
  return {
    paths,
    fallback: false,
  };
}

function TagDescription() {
  const router = useRouter();
  const { asPath } = router;
  let pathArray = asPath.split("/");
  console.log(pathArray);
  let tag = pathArray[2];
  return (
    <Flex
      mt={4}
      px={{ base: 4, sm: 1 }}
      py={2}
      justify={"start"}
      align="baseline"
      gap={3}
    >
      <Tag
        border="1px solid"
        borderColor="brand.secondary"
        bg="brand.primary"
        boxShadow="xl"
        borderRadius={"sm"}
        color="white"
        size="lg"
      >
        {tag}
      </Tag>
      <Text
        display={{ base: "none", md: "block" }}
        fontSize="md"
        color="gray.500"
      >
        {tags[tag]}
      </Text>
    </Flex>
  );
}

export default function TagArticles({ frontmatterData }) {
  const color = useColorModeValue("brand.foreground", "dark.foreground");

  return (
    <Flex direction="column" maxWidth="680px">
      <TagDescription />

      {frontmatterData
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
