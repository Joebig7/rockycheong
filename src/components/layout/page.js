import Header from "./header";
import Footer from "./footer";
import { Container, Flex } from "@chakra-ui/react";

export default function Page({ children }) {
  return (
    <>
      <Flex w="100%" minHeight="100vh" direction="column">
        <Header />
        <Container
          p={0}
          flexGrow={1}
          maxW={{ base: "100%", md: "692px" }}
        >
          {children}
        </Container>
        <Footer />
      </Flex>
    </>
  );
}
