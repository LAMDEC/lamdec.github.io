import { parse } from "yaml";
import { PostsImport } from "../types/PostImport";

function getFrontmatter(markdown: string) {
  const frontmatter = parse(markdown.substring(4, markdown.indexOf("---", 4)));
  // if (frontmatter.date) {
  //   frontmatter.date = new Date(frontmatter.date);
  // }
  // console.log(frontmatter)
  return frontmatter;
}

export function useMetadata(postsImport: PostsImport) {
  const titles = Object.keys(postsImport).map((str) =>
    str.substring(str.indexOf("../posts/") + 9, str.indexOf(".md"))
  );

  const posts = Object.values(postsImport);

  const metadata = posts.map(getFrontmatter);
  metadata.forEach((_, i, arr) => (arr[i].title = titles[i]));

  return metadata;
}
