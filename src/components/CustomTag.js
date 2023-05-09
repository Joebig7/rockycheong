import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function CustomeTag({ children, path }) {
  return (
    <Link
      w="30px"
      h="10px"
      px="2"
      as={NextLink}
      fontWeight="600"
      fontSize="lg"
      href={path}
      _hover={{ color: "brand.900", textDecoration: "underline" }}
    >
      {children}
    </Link>
  );
}
