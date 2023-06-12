import {
  Flex,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Link,
} from "@chakra-ui/react";

export default function About() {
  return (
    <Flex direction="column" p={{ base: 4, md: 6 }}>
      <Flex direction="column" mt={{ base: 4, md: 6 }} gap={4}>
        <Heading as="h1">关于我</Heading>
        <Text fontSize={"lg"}>
          正执着于成为一名Indie developer，个人使用的一些技术栈：
        </Text>
        <UnorderedList fontSize={"lg"}>
          <ListItem>
            前端：javascript, typescript, html, css, tailwindcss,nextjs,chakra
            ui...
          </ListItem>
          <ListItem>后端：java,golang,rust（学习中）...</ListItem>
          <ListItem>其他：mysql,mongoDB,redis...</ListItem>
        </UnorderedList>

        <Text fontSize={"lg"}>
          如若需要联系本人，可通过邮箱：joebig19960318@gmail.com
        </Text>
      </Flex>

      <Flex mt={6} direction="column" gap={4}>
        <Heading as="h1">关于本站</Heading>

        <Text fontSize="lg">
          rockycheong.com
          是我的个人网站，主要用来写个人博客，记录个人项目，同时这个博客本身也是自己搭建的一个项目。
        </Text>

        <Text fontSize="lg">
          本网站主要使用
          <Link color="brand.primary" href="https://nextjs.org/" isExternal>
            Next.js
          </Link>
          和
          <Link color="brand.primary" href="https:chakra-ui.com" isExternal>
            chakra ui
          </Link>
          搭建而成，可以在
          <Link
            color="brand.primary"
            href="https://github.com/Joebig7/rockycheong"
            isExternal
          >
            Github
          </Link>
          查看源码
        </Text>
      </Flex>
    </Flex>
  );
}
