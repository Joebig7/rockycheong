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

function MobileMenuItem({ path, onClose, children }) {
  return (
    <Link
      as={NextLink}
      fontWeight="600"
      fontSize="2xl"
      href={path}
      textDecor={"underline"}
      _hover={{ color: "brand.500", textDecoration: "underline" }}
      onClick={onClose}
    >
      {children}
    </Link>
  );
}

export default function MobileMenu() {
  const menuColor = useColorModeValue("brand.foreground", "brand.background");
  const bgColor = useColorModeValue("brand.background","dark.background");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box as="button" onClick={onOpen} pt="2px"  display={{ md: "none" }}>
        <Icon boxSize={6} color={menuColor} as={HiMenu} />
      </Box>
      <Drawer isOpen={isOpen}  placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bg={bgColor}></DrawerHeader>
          <DrawerBody bg={bgColor}>
            <Flex direction="column" align="flex-start" gap={4}>
              <MobileMenuItem path="/articles" onClose={onClose}>
                文章
              </MobileMenuItem>
              <MobileMenuItem path="/tags" onClose={onClose}>
                标签
              </MobileMenuItem>
              <MobileMenuItem path="/about" onClose={onClose}>
                关于
              </MobileMenuItem>
              <MobileMenuItem path="/feature" onClose={onClose}>
                What's new
              </MobileMenuItem>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
