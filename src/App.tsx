// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { Box, MantineProvider } from "@mantine/core";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { ContentContext, MetadataContext } from "./PostsContext";
import { parse } from "yaml";

const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function getFrontmatter(markdown: string) {
  const frontmatter = parse(markdown.substring(5, markdown.indexOf("---", 4)));
  // if (frontmatter.date) {
  //   frontmatter.date = new Date(frontmatter.date);
  // }
  return frontmatter;
}

const postsImport = import.meta.glob("../posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

const titles = Object.keys(postsImport).map((str) =>
  str.substring(str.indexOf("../posts/") + 9, str.indexOf(".md"))
);

const posts = Object.values(postsImport);

const metadata = posts.map(getFrontmatter);
metadata.forEach((_, i, arr) => (arr[i].title = titles[i]));

export default function App() {
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

