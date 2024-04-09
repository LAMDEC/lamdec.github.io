// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { Box, MantineProvider } from "@mantine/core";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { PostsContext, MetadataContext } from "./PostsContext";
import { useMetadata } from "./hooks/useMetadata";
import { PostsImport } from "./types/PostImport";
import { Posts } from "./types/Posts";

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

  const posts: Posts = {};

  Object.keys(postsImport).forEach((key, i) => {
    posts[key] = { metadata: metadata[i], content: postsImport[key] };
  });

  return (
    <MantineProvider>
      <Box ff="Montserrat Variable, sans-serif" style={{ overflowX: "hidden" }}>
        <MetadataContext.Provider value={metadata}>
          <PostsContext.Provider value={posts}>
            <RouterProvider router={router} />
          </PostsContext.Provider>
        </MetadataContext.Provider>
      </Box>
    </MantineProvider>
  );
}

