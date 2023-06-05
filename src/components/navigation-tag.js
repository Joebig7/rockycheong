import { Link, Button, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

export default function NavigationTag({ children, path }) {
  const buttonBg = useColorModeValue("brand.background", "dark.background");
  const hoverBg = useColorModeValue("brand.background", "dark.accent");
  const hoverFontBg = useColorModeValue("dark.background", "brand.background");
  const fontColor = useColorModeValue("#737373", "#7fa3a3");
  return (
    <Button
      w="52px"
      h="38.5px"
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
