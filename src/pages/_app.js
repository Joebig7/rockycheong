import { ChakraProvider } from "@chakra-ui/react";
import PageLayout from "../layout/Page";
import theme from "../themes/GlobalThemes";
import Fonts from "../themes/GlobalFonts";
import "@fontsource/inter/100.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </ChakraProvider>
  );
}

export default MyApp;
