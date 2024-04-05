import { useContext } from "react";
import Markdown from "react-markdown";
import remarkFrontmatter from "remark-frontmatter";
import { ContentContext } from "./PostsContext";
import { Route } from "./routes/posts.$postId.lazy";
import { Box, Flex } from "@mantine/core";
import "./Post.css";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export function Post() {
  const { postId } = Route.useParams();
  const posts = useContext(ContentContext);

  const content = posts[`../posts/${postId}.md`];

  return (
    <Flex justify="center">
      <Box maw="60rem" w="100%" px="sm" py="xl">
        <Markdown
          className="markdown"
          remarkPlugins={[remarkFrontmatter, remarkMath, remarkGfm]}
          rehypePlugins={[rehypeKatex]}
        >
          {content}
        </Markdown>
      </Box>
    </Flex>
  );
}
