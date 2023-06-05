import { ChakraProvider } from "@chakra-ui/react";
import PageLayout from "../components/layout/page";
import theme from "../config/global-theme";
import '@fontsource/inter';
import "@fontsource/noto-serif-sc/400.css";
import "@fontsource/noto-serif-sc/700.css";
import "@fontsource/noto-sans-sc/400.css";
import "@fontsource/noto-sans-sc/700.css";
import '@fontsource-variable/jetbrains-mono';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </ChakraProvider>
  );
}

export default MyApp;
