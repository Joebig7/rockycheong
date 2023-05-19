import { Link, Button, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

export default function CustomTag({ children, path }) {
  const buttonBg = useColorModeValue("white", "#24292e");
  const hoverBg = useColorModeValue("white", "gray.800");
  const hoverFontBg = useColorModeValue("black", "white");
  const fontColor = useColorModeValue("#737373", "#7fa3a3");

  return (
    <Button
      w="52px"
      h="38.5px"
      mx="4px"
      fontWeight="400"
      fontSize="lg"
      color={fontColor}
      bg={buttonBg}
      _active={{ outline: "4px solid #2563eb", borderRadius: "md" }}
      _hover={{ bgColor: hoverBg, borderRadius: "md", color: hoverFontBg }}
      fontFamily="inter"
    >
      <Link
        _hover={{ textDecor: "none" }}
        _focus={{ fontWeight: 600, color: hoverFontBg }}
        as={NextLink}
        href={path}
      >
        {children}
      </Link>
    </Button>
  );
}
