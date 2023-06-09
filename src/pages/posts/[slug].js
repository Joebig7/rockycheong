import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import { getAllPostSlugs, getPostData } from "../../lib/blog-posts-utils";
import {
  Flex,
  Heading,
  Text,
  Box,
  useColorModeValue,
  AspectRatio,
  Image,
  useColorMode,
  Tag,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import styles from "../../styles/markdown.module.css";
import darkStyles from "../../styles/markdown-dark.module.css";

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.slug);
  return {
    props: {
      ...postData,
    },
  };
};

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
}

export default function BlogPost({ code, frontmatter }) {
  const color = useColorModeValue("gray.500", "dark.foreground");
  const fontColor = useColorModeValue("brand.foreground", "dark.foreground");
  const bgColor = useColorModeValue("brand.background", "dark.background");
  const { colorMode } = useColorMode();

  const Component = useMemo(() => getMDXComponent(code), [code]);

  const components = {
    wrapper: ({ children }) => (
      <Box
        className={
          colorMode === "dark"
            ? darkStyles["markdown-body-dark"]
            : styles["markdown-body"]
        }
        bg={bgColor}
        color={fontColor}
        sx={{
          fontFamily: "noto serif sc",
          "h1,h2,h3,h4,h5,h6": { fontFamily: "noto sans sc" },
        }}
        letterSpacing="wider"
        lineHeight="tall"
      >
        {children}
      </Box>
    ),
  };

  let tags = frontmatter.tags;
  let tagArray = tags.split(",");

  return (
    <Flex direction="column" px={{ base: 6, md: 1 }} gap={6}>
      <Heading as="h1" fontSize="4xl" pt={{ base: "32px", md: "56px" }}>
        {frontmatter.title}
      </Heading>
      <Flex
        color={color}
        direction={{ base: "column", sm: "column" }}
        justify="space-between"
        gap={2}
      >
        {" "}
        <Flex gap={1} pr={1}>
          {tagArray.map((tag) => (
            <Link as={NextLink} href={`/tags/${tag}`}>
              <Tag color={fontColor} fontWeight={600} fontSize="xs">
                {tag}
              </Tag>
            </Link>
          ))}
        </Flex>
        <Flex gap={2}>
          <Text>{frontmatter.author}</Text>

          <Text>发布于{frontmatter.publishDate}</Text>
        </Flex>
      </Flex>

      {frontmatter.cover === undefined ? (
        ""
      ) : (
        <AspectRatio ratio={21 / 9}>
          <Image
            src={frontmatter.cover}
            alt="article cover"
            objectFit="cover"
            borderRadius="xl"
            boxShadow="xl"
          />
        </AspectRatio>
      )}

      <Component components={components} />
    </Flex>
  );
}
