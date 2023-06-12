import { VStack, Heading, Text, Button, Link } from "@chakra-ui/react";
import { NextLink } from "next/link";

export default function NotFound() {
  return (
    <VStack mt="24" gap={12}>
      <Heading
        fontFamily={"Inter"}
        as="h1"
        fontSize="5xl"
        textAlign={"center"}
        fontWeight={800}
      >
        Sorry, I couldn't find this <br />
        page!
      </Heading>
      <Button>
        <Link as={NextLink} _hover={{ textDecor: "none" }} href="/">
          Back Home
        </Link>
      </Button>
    </VStack>
  );
}
