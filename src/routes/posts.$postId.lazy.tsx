import { createLazyFileRoute } from "@tanstack/react-router";
import { useContext } from "react";
import { ContentContext } from "../PostsContext";
import Markdown from "react-markdown";
import remarkFrontmatter from "remark-frontmatter";

export const Route = createLazyFileRoute("/posts/$postId")({
  component: Post,
});

export function Post() {
  const { postId } = Route.useParams();
  const posts = useContext(ContentContext);

  console.log(posts);

  const content = posts[`../posts/${postId}.md`];

  return <Markdown remarkPlugins={[remarkFrontmatter]}>{content}</Markdown>;
}
