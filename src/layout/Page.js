import Header from "./Header";
import Footer from "./Footer";
import {
  Container,
  Box,
  Flex,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

export default function Page({ children }) {
  return (
    <>
      <Flex w="100%" minHeight="100vh" direction="column">
        <Header />
        <Container
          p={0}
          w="100%"
          flexGrow={1}
          maxW={{ sm: "100%", md: "80%", xl: "40%" }}
        >
          {children}
        </Container>
        <Footer />
      </Flex>
    </>
  );
}
