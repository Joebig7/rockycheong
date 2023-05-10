import { Box, Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Logo() {
  const bg = useColorModeValue("brand.700", "dark.500");
  return (
    <Box
      w={{ base: "200px", md: "222px" }}
      bg={bg}
      textAlign="center"
      transition="transform .3s"
      _hover={{
        base: { bg: "yellow.300" },
        md: {
          transform: "rotate(-8deg)",
        },
      }}
      borderRadius="sm"
    >
      <Link
        fontFamily="montserrat"
        fontSize={{ base: "lg", md: "xl" }}
        fontWeight="700"
        as={NextLink}
        href="/"
        _hover={{ textDecor: "none" }}
        color="white"
      >
        Rocky Cheong's Blog
      </Link>
    </Box>
  );
}
