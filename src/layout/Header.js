import { Flex } from "@chakra-ui/react";
import Logo from "../components/Logo";
import CustomerTag from "../components/CustomTag";
import ColorMode from "../components/ColorMode";

export default function Header() {
  return (
    <Flex
      h="80px"
      mx="auto"
      direction="row"
      justify="space-between"
      align="center"
      w="100%"
      maxW={{ sm: "100%", md: "80%", lg: "40%" }}
      px={{ base: 2 }}
    >
      <Logo />
      <Flex justify="space-between" gap="10">
        <Flex
          display={{ base: "none", md: "block" }}
          justify="center"
          sx={{ gap: "10px" }}
          align="baseline"
        >
          <CustomerTag path="/blog-list">文章</CustomerTag>
          <CustomerTag path="/tags">标签</CustomerTag>
          <CustomerTag path="/about">关于</CustomerTag>
        </Flex>

        <ColorMode />
      </Flex>
    </Flex>
  );
}
