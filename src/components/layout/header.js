import { Flex, useColorModeValue, Box } from "@chakra-ui/react";

import Logo from "../logo";
import NavigationTag from "../navigation-tag";
import ThemeToggle from "../theme-toggle";
import MobileMenu from "../mobile-menu";

export default function Header() {
  const borderColor = useColorModeValue("gray.200", "gray.800");
  const bgColor = useColorModeValue("brand.background", "dark.background");
  return (
    <Box
      borderBottom="1px solid"
      borderColor={borderColor}
      boxShadow="sm"
      sx={{
        position: "-webkit-sticky",
        position: "sticky",
        top: "0",
        "z-index": "10",
      }}
      bgColor={bgColor}
    >
      <Flex
        h="60px"
        mx="auto"
        justify="space-between"
        align="center"
        w={{ md: "692px" }}
        px="6px"
      >
        <Logo />
        <Flex justify="space-between" gap={{"base":"2","md":"1"}}>
          <Flex
            display={{ base: "none", md: "flex" }}
            justify="center"
            gap={2}
          >
            <NavigationTag path="/articles">文章</NavigationTag>
            <NavigationTag path="/tags">标签</NavigationTag>
            <NavigationTag path="/about">关于</NavigationTag>
          </Flex>
          <MobileMenu />
          <ThemeToggle />
        </Flex>
      </Flex>
    </Box>
  );
}
