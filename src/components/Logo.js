import {
  Box,
  Link,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function Logo() {
  //设置不同viewport是否转动
  const isRotate = useBreakpointValue(
    {
      base: "false",
      md: "true",
      lg: "true",
      xl: "true",
      "2xl": "true",
    },
    {
      fallback: "false",
    }
  );

  const bg = useColorModeValue("brand.700", "dark.500");

  return (
    <Box
      w={{ base: "200px", md: "222px" }}
      h="100hv"
      bg={bg}
      textAlign="center"
      transition="transform .3s"
      _hover={{ transform: isRotate ? "rotate(-8deg)" : "none" }}
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
