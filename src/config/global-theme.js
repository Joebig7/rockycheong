import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("hsl(0,0%,100%)", "hsl(224,71%,4%)")(props),
      color: mode("hsl(222.2,47.4%,11.2%)", "hsl(213,31%,91%)")(props),
    },
  }),
};

const theme = extendTheme({
  colors: {
    brand: {
      background: "hsl(0,0%,100%)",
      foreground: "hsl(222.2,47.4%,11.2%)",
      muted: "hsl(210 ,40% ,96.1%)",
      "muted-foreground": "hsl(215.4,16.3%,46.9%)",
      popover: "hsl(0 ,0% ,100%)",
      "popover-foreground": "hsl(222.2,47.4%,11.2%)",
      border: "hsl(214.3,31.8%,91.4%)",
      input: "hsl(214.3,31.8%,91.4%)",
      card: "hsl(0,0%,100%)",
      "card-foreground": "hsl(222.2,47.4%,11.2%)",
      primary: "hsl(224, 82% ,56%)",
      "primary-foreground": "hsl(0,0%,100%)",
      secondary: "hsl(210,40%,96.1%)",
      "secondary-foreground": "hsl(222.2,47.4%,11.2%)",
      accent: "hsl(210,40%,96.1%)",
      "accent-foreground": "hsl(222.2,47.4%,11.2%)",
      destructive: "hsl(0,100%,50%)",
      "destructive-foreground": "hsl(210,40%,98%)",
      ring: "hsl(215,20.2%,65.1%)",
    },
    dark: {
      background: "hsl(224,71%,4%)",
      foreground: "hsl(213,31%,91%)",
      muted: "hsl(223,47%,11%)",
      "muted-foreground": "hsl(215.4,16.3%,56.9%)",
      popover: "hsl(224,71%,4%)",
      "popover-foreground": "hsl(215,20.2%,65.1%)",
      border: "hsl(216,34%,17%)",
      input: "hsl(216,34%,17%)",
      card: "hsl(224,71%,4%)",
      "card-foreground": "hsl(213,31%,91%)",
      primary: "hsl(224, 82% ,56%)",
      "primary-foreground": "hsl(0,0%,100%)",
      secondary: "hsl(222.2,47.4%,1.2%)",
      "secondary-foreground": "hsl(210,40%,98%)",
      accent: "hsl(216,34%,17%)",
      "accent-foreground": "hsl(210,40%,98%)",
      destructive: "hsl(0,63%,31%)",
      "destructive-foreground": "hsl(210,40%,98%)",
      ring: "hsl(216,34%,17%)",
    },
  },
  fonts: {
    heading: `'noto sans sc',sans-serif`,
    body: `'noto serif sc',sans-serif`,
  },
  config: { initialColorMode: "light", useSystemColorMode: true },
  styles,
  breakpoints: {
    sm: "550px",
    md: "768px",
    lg: "992px",
    xl: "1100px",
    "2xl": "1500px",
  },
});

export default theme;
