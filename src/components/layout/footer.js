import {
  Flex,
  Text,
  Link,
  useColorModeValue,
  useMediaQuery,
  VisuallyHidden,
} from "@chakra-ui/react";
import NextLink from "next/link";

function FootLink() {
  return (
    <Link
      textDecor="none"
      _hover={{ color: "brand.primary" }}
      as={NextLink}
      href="/feature"
    >
      What's new
    </Link>
  );
}

export default function Footer() {
  const borderColor = useColorModeValue("gray.100", "gray.700");

  const [isLargerThan550] = useMediaQuery("(min-width: 550px)", {
    ssr: true,
    fallback: false,
  });

  return (
    <Flex
      borderTop="1px"
      borderColor={borderColor}
      fontSize="sm"
      color="gray.400"
      align="center"
      w={{ base: "full", md: "692px" }}
      h="20px"
      px={2}
      py={6}
      mx="auto"
      justify={{ base: "center", sm: "space-between" }}
    >
      <Text fontFamily="sans-serif">&copy; Rocky Cheong 2023 </Text>

      {isLargerThan550 ? (
        <FootLink />
      ) : (
        <VisuallyHidden>
          <FootLink />
        </VisuallyHidden>
      )}
    </Flex>
  );
}
