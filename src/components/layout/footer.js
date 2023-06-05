import { Flex, Text, Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Footer() {
  const borderColor = useColorModeValue("gray.100", "gray.700");

  return (
    <Flex
      borderTop="1px"
      borderColor={borderColor}
      direction="column"
      fontSize="sm"
      color="gray.400"
      align="center"
    >
      <Text fontFamily="sans-serif">&copy; Copyright 2023 Rocky Cheong</Text>
      <Text>
        代码片段是
        <Link
          textDecor="underline"
          _hover={{ color: "brand.600" }}
          href="https://opensource.org/license/mit"
          target="_blank"
        >
          MIT licensed
        </Link>
      </Text>
      <Link
        textDecor="underline"
        _hover={{ color: "brand.600" }}
        as={NextLink}
        href="/disclaimer"
      >
        免责声明
      </Link>
    </Flex>
  );
}
