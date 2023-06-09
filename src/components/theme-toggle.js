import { useColorMode, Box } from "@chakra-ui/react";
import { FiSun, FiMoon } from "react-icons/fi";

import { Icon } from "@chakra-ui/react";

function CustomerIcon({ children }) {
  return (
    <Icon
      mt={{ base: "2.5px", md: "5px" }}
      mr={{ base: "4", md: "0" }}
      pt={{ md: "1" }}
      boxSize={6}
      as={children}
    />
  );
}

export default function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Box as="button" onClick={toggleColorMode}>
        {colorMode === "light" ? (
          <CustomerIcon>{FiMoon}</CustomerIcon>
        ) : (
          <CustomerIcon>{FiSun}</CustomerIcon>
        )}
      </Box>
    </header>
  );
}
