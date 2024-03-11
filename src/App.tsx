// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { Box, MantineProvider } from "@mantine/core";
import { Hero } from "./Hero";
import { Header } from "./Header";
import { About } from "./About";
import { Content } from "./Content";
import { Posts } from "./Posts";

export default function App() {
  return (
    <MantineProvider>
      <Box ff="Montserrat Variable, sans-serif">
        <Header />
        <Hero />
        <Content>
          <About />
          <Posts />
        </Content>
      </Box>
    </MantineProvider>
  );
}

