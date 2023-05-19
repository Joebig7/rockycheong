import { Box, Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Logo() {
  const bg = useColorModeValue("brand.700", "dark.500");
  return (
    <Box
      w={{ base: "170px", md: "180px" }}
      bg={bg}
      textAlign="center"
      transition="transform .3s"
      _hover={{
        md: {
          transform: "rotate(-6deg)",
        },
      }}
      borderRadius="sm"
    >
      <Link
        fontSize={{ base: "lg", md: "xl" }}
        fontWeight="700"
        fontFamily="inter"
        as={NextLink}
        href="/"
        _hover={{ textDecor: "none" }}
        color="white"
      >
        rockycheong.com
      </Link>
    </Box>
  );
}
