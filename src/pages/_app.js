import { ChakraProvider } from "@chakra-ui/react";
import theme from "../components/themes/GlobalThemes";
import Fonts from "../components/themes/GlobalFonts";
import "@fontsource/montserrat/400.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
