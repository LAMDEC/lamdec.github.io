import { useContext } from "react";
import Markdown from "react-markdown";
import remarkFrontmatter from "remark-frontmatter";
import { PostsContext } from "./PostsContext";
import { Route } from "./routes/posts.$postId.lazy";
import { Avatar, Box, Divider, Flex, Image, Text } from "@mantine/core";
import "./Post.css";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { Content } from "./Content";
import { membros } from "../public/membros";

export function Post() {
  const { postId } = Route.useParams();
  const posts = useContext(PostsContext);

  const { content, metadata } = posts[`../posts/${postId}.md`];

  const authors = membros.filter(
    ({ name }) => metadata.authors.indexOf(name) !== -1
  );

  console.log(authors);

  return (
    <Content>
      <Flex justify="center">
        <Box maw="60rem" w="100%" py="xl">
          <Box>
            <Box fz="2rem" fw={500}>
              {metadata.title}
            </Box>
            <Image mt="1rem" src={metadata.image} />
            <Flex
              c="dimmed"
              gap="lg"
              align="center"
              justify="space-between"
              mt="2rem"
            >
              <Flex w="fit-content" wrap="wrap" gap="lg">
                {authors.map(({ name, image }) => {
                  return (
                    <Flex align="center">
                      <Avatar src={image} mr="xs" size={44} />
                      <Text>{name}</Text>
                    </Flex>
                  );
                })}
              </Flex>
              <Box style={{ whiteSpace: "nowrap" }}>{metadata.date}</Box>
            </Flex>
            <Divider mt="2rem" />
          </Box>
          <Markdown
            className="markdown"
            remarkPlugins={[remarkFrontmatter, remarkMath, remarkGfm]}
            rehypePlugins={[rehypeKatex]}
          >
            {content}
          </Markdown>
        </Box>
      </Flex>
    </Content>
  );
}
