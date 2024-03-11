import { Box, Card, Divider, Flex, SimpleGrid } from "@mantine/core";

export function Posts() {
  return (
    <Box>
      <Box mt="4rem" fz="2rem" ff="Oswald Variable">
        ÚLTIMAS ATUALIZAÇÕES
      </Box>
      <Divider mt="xs" mb="lg" color="gray.6" />
      <SimpleGrid cols={3}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((val) => (
          <Card key={val}>card</Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}
