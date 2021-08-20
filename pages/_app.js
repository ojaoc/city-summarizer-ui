import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import theme from "../styles/theme";
import "@fontsource/maven-pro";

function MyApp({ Component, pageProps }) {
  const customTheme = extendTheme(theme);

  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
