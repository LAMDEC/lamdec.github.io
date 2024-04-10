import { Box, Divider, SimpleGrid, useMantineColorScheme } from "@mantine/core";
import { PostCard } from "./PostCard";
import { noticias } from "../public/noticias";

export function News() {
  const { colorScheme } = useMantineColorScheme();

  noticias.sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <Box>
      <Box mt="4rem" fz="2rem" c={colorScheme === "dark" ? "white" : "black"}>
        Notícias
      </Box>
      <Divider mt="xs" mb="lg" />
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}>
        {noticias.map(({ title, date, image, site, link }, i) => (
          <PostCard
            key={i}
            title={title}
            date={date}
            image={image}
            tags={[site]}
            link={link}
            outgoing
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
