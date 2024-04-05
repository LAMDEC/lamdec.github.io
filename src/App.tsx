// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { Box, MantineProvider } from "@mantine/core";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { ContentContext, MetadataContext } from "./PostsContext";
import { useMetadata } from "./hooks/useMetadata";
import { PostsImport } from "./types/PostImport";

const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const postsImport: PostsImport = import.meta.glob("../posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

export default function App() {
  const metadata = useMetadata(postsImport);

  return (
    <MantineProvider>
      <Box ff="Montserrat Variable, sans-serif" style={{ overflowX: "hidden" }}>
        <MetadataContext.Provider value={metadata}>
          <ContentContext.Provider value={postsImport}>
            <RouterProvider router={router} />
          </ContentContext.Provider>
        </MetadataContext.Provider>
      </Box>
    </MantineProvider>
  );
}

