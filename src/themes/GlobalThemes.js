import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("white", "#24292e")(props),
    },
  }),
};

const theme = extendTheme({
  colors: {
    brand: {
      100: "hsl(190, 77%, 88%)",
      200: "hsl(190, 76%, 82%)",
      300: "hsl(189, 75%, 75%)",
      400: "hsl(190, 74%, 59%)",
      500: "hsl(190, 100%, 42%)",
      600: "hsl(195, 100%, 39%)",
      700: "hsl(201, 100%, 36%)",
      800: "hsl(214, 97%, 27%)",
      900: "hsl(239, 94%, 19%)",
    },
    dark: {
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
    heading: `'Source Han Sans',sans-serif`,
    body: `'Source Han Sans',sans-serif`,
  },
  config: { initialColorMode: "light", useSystemColorMode: true },
  styles,
  breakpoints: {
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },
});

export default theme;
