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

      100: "hsl(190, 77%, 88%)",
      200: "hsl(190, 76%, 82%)",
      300: "hsl(189, 75%, 75%)",
      400: "hsl(190, 74%, 59%)",
      500: "hsl(190, 100%, 42%)",
      600: "hsl(195, 100%, 39%)",
      700: "hsl(224, 82% ,56%)",
      800: "hsl(214, 97%, 27%)",
      900: "hsl(239, 94%, 19%)",
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

      100: "hsl(159, 56%, 7%)",
      200: "hsl(155, 43%, 18%)",
      300: "hsl(153, 40%, 30%)",
      400: "hsl(153, 39%, 41%)",
      500: "hsl(152, 41%, 52%)",
      600: "hsl(150, 42%, 62%)",
      700: "hsl(147, 43%, 71%)",
      800: "hsl(141, 45%, 81%)",
      900: "hsl(129, 53%, 90%)",
    },
  },
  fonts: {
    heading: `'noto sans sc',sans-serif`,
    body: `'noto serif sc',sans-serif`,
  },
  config: { initialColorMode: "light", useSystemColorMode: true },
  styles,
  breakpoints: {
    tablet: "550px",
    laptop: "1100px",
    desktop: "1500px",
  },
});

export default theme;
