import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Box,
  Icon,
  Flex,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";

import { HiMenu } from "react-icons/hi";
import Logo from "./Logo";

export default function MobileMenu() {
  const menuColor = useColorModeValue("brand.800", "dark.500");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box as="button" onClick={onOpen} pt="2px" display={{ md: "none" }}>
        <Icon boxSize={6} color={menuColor} as={HiMenu} />
      </Box>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>
          <DrawerBody>
            <Flex direction="column" align="flex-start" gap={4}>
              <Link
                as={NextLink}
                fontWeight="600"
                fontSize="2xl"
                href="/articles"
                textDecor={"underline"}
                _hover={{ color: "brand.500", textDecoration: "underline" }}
                onClick={onClose}
              >
                文章
              </Link>
              <Link
                as={NextLink}
                fontWeight="600"
                fontSize="2xl"
                href="/tags"
                textDecor={"underline"}
                _hover={{ color: "brand.500", textDecoration: "underline" }}
                onClick={onClose}
              >
                标签
              </Link>
              <Link
                as={NextLink}
                fontWeight="600"
                fontSize="2xl"
                href="/about"
                textDecor={"underline"}
                _hover={{ color: "brand.500", textDecoration: "underline" }}
                onClick={onClose}
              >
                关于
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
