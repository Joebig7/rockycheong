import { Box, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { Website_url } from "../data/global-data";

export default function Logo() {
  return (
    <Box
      w="182px"
      bgGradient="linear(to-r,brand.primary,#00c6ff)"
      textAlign="center"
      transition="transform .3s"
      _hover={{
        md: {
          transform: "rotate(-6deg)",
        },
      }}
      borderRadius={{"base":"md","sm":"sm"}}
      ml={{ base: "1", xl: "0" }}
    >
      <Link
        fontSize="xl"
        fontWeight="700"
        as={NextLink}
        href="/"
        _hover={{ textDecor: "none" }}
        color="white"
      >
        {Website_url}
      </Link>
    </Box>
  );
}
