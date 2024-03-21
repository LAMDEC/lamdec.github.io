// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { Box, MantineProvider } from "@mantine/core";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <MantineProvider>
      <Box ff="Montserrat Variable, sans-serif" style={{ overflowX: "hidden" }}>
        <RouterProvider router={router} />
      </Box>
    </MantineProvider>
  );
}

