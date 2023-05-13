import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import { getAllPostSlugs, getPostData } from "../../lib/blogPosts";
import { Flex, Heading, Text,Box } from "@chakra-ui/react";

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
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <Flex direction="column" gap={6}>
      <Heading>{frontmatter.title}</Heading>
      <Text>{frontmatter.date}</Text>
       
      <Box>
      <Component />
      </Box>
 
    </Flex>
  );
}
