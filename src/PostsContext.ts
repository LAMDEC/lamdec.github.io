import { createContext } from "react";
import { parse } from "yaml";

// function getFrontmatter(markdown: string) {
//   const frontmatter = parse(markdown.substring(5, markdown.indexOf("---", 4)));
//   // if (frontmatter.date) {
//   //   frontmatter.date = new Date(frontmatter.date);
//   // }
//   return frontmatter;
// }

// const postsImport = import.meta.glob("../posts/*.md", {
//   query: "?raw",
//   import: "default",
//   eager: true,
// });

// const titles = Object.keys(postsImport).map((str) =>
//   str.substring(str.indexOf("../posts/") + 9, str.indexOf(".md"))
// );

// const posts = Object.values(postsImport);

// const metadata = posts.map(getFrontmatter);
// metadata.forEach((_, i, arr) => (arr[i].title = titles[i]));

export const MetadataContext = createContext([]);
export const ContentContext = createContext([]);
