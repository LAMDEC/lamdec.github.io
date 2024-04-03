import { Box, Divider, SimpleGrid, useMantineColorScheme } from "@mantine/core";
import { PostCard } from "./PostCard";
import Markdown from "react-markdown";
import { parse } from "yaml";
import remarkFrontmatter from "remark-frontmatter";

function getFrontmatter(markdown: string) {
  const frontmatter = parse(markdown.substring(5, markdown.indexOf("---", 4)));
  // if (frontmatter.date) {
  //   frontmatter.date = new Date(frontmatter.date);
  // }
  return frontmatter;
}

export function Posts() {
  const { colorScheme } = useMantineColorScheme();

  const postsImport = import.meta.glob("../posts/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
  });

  const posts = Object.values(postsImport);

  const metadata = posts.map(getFrontmatter);
  console.log(metadata);

  return (
    <Box>
      <Box
        mt="4rem"
        fz="2rem"
        ff="Oswald Variable, sans-serif"
        c={colorScheme === "dark" ? "white" : "black"}
      >
        ÚLTIMAS ATUALIZAÇÕES
      </Box>
      <Divider mt="xs" mb="lg" />
      <SimpleGrid cols={3}>
        {metadata.map(({ title, date, image, tags }, i) => (
          <PostCard
            key={i}
            title={title}
            date={date}
            image={image}
            tags={tags}
            link={"/posts/" + title}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
