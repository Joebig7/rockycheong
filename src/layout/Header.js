import { Flex } from "@chakra-ui/react";

import Logo from "../components/Logo";
import CustomerTag from "../components/CustomTag";
import ColorMode from "../components/ColorMode";
import MobileMenu from "../components/MobileMenu";

export default function Header() {
  return (
    <Flex
      h="80px"
      mx="auto"
      justify="space-between"
      align="center"
      w="100%"
      maxW={{ sm: "100%", md: "80%", xl: "40%" }}
      px={{ base: 2 }}
    >
      <Logo />
      <Flex justify="space-between" gap={{ base: "2", md: "10" }}>
        <Flex
          display={{ base: "none", md: "block" }}
          justify="center"
          sx={{ gap: "10px" }}
        >
          <CustomerTag path="/blog-list">文章</CustomerTag>
          <CustomerTag path="/tags">标签</CustomerTag>
          <CustomerTag path="/about">关于</CustomerTag>
        </Flex>
        <MobileMenu />
        <ColorMode />
      </Flex>
    </Flex>
  );
}
