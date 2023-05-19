import { Flex, useColorModeValue, Box } from "@chakra-ui/react";

import Logo from "../components/Logo";
import CustomerTag from "../components/CustomTag";
import ColorMode from "../components/ColorMode";
import MobileMenu from "../components/MobileMenu";

export default function Header() {
  const borderColor = useColorModeValue("gray.200", "gray.800");
  return (
    <Box borderBottom="1px" borderColor={borderColor}>
      <Flex
        h="60px"
        mx="auto"
        justify="space-between"
        align="center"
        w={{ md: "702px" }}
        px={{ base: "6px" }}
      >
        <Logo />
        <Flex justify="space-between" gap={2}>
          <Flex
            display={{ base: "none", md: "block" }}
            justify="center"
            sx={{ gap: "10px" }}
          >
            <CustomerTag path="/articles">文章</CustomerTag>
            <CustomerTag path="/tags">标签</CustomerTag>
            <CustomerTag path="/about">关于</CustomerTag>
          </Flex>
          <MobileMenu />
          <ColorMode />
        </Flex>
      </Flex>
    </Box>
  );
}
