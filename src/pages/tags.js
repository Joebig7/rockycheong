import { getAllTags } from "../lib/blog-posts-utils";
import { Flex, Tag, Link } from "@chakra-ui/react";
import NextLink from "next/link";
//获取所有文章的frontmatter
export async function getStaticProps() {
  const tagsArray = await getAllTags();
  return {
    props: {
      tagsArray,
    },
  };
}

export default function Tags({ tagsArray }) {
  return (
    <Flex
      mt={12}
      justify={"start"}
      flexWrap={"wrap"}
      gap={2}
      direction={"row"}
      px={4}
    >
      {tagsArray.map((tag) => (
        <Link
          as={NextLink}
          href={`/tags/${tag}`}
          _hover={{ textDecor: "none" }}
        >
          <Tag
            bg="brand.primary"
            colorScheme="facebook"
            variant="solid"
            size="lg"
          >
            {tag}
          </Tag>
        </Link>
      ))}
    </Flex>
  );
}
