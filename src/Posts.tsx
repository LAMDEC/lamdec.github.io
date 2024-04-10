import { Box, Divider, SimpleGrid, useMantineColorScheme } from "@mantine/core";
import { PostCard } from "./PostCard";
import { MetadataContext } from "./PostsContext";
import { useContext } from "react";

export function Posts() {
  const { colorScheme } = useMantineColorScheme();

  const metadata = useContext(MetadataContext);

  metadata.sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <Box>
      <Box mt="4rem" fz="2rem" c={colorScheme === "dark" ? "white" : "black"}>
        Posts
      </Box>
      <Divider mt="xs" mb="lg" />
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}>
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
