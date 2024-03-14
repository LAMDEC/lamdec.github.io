import {
  Box,
  Card,
  Divider,
  SimpleGrid,
  useMantineColorScheme,
} from "@mantine/core";

import { PostCard } from "./PostCard";

export function Posts() {
  const { colorScheme } = useMantineColorScheme();
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
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((val) => (
          <PostCard
            title={`Projeto ${val}`}
            tags={[
              ["IA", "red"],
              ["Estatística", "blue"],
            ]}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut tellus eget erat pulvinar efficitur. Fusce non gravida diam. Vestibulum."}
            link={"/"}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
