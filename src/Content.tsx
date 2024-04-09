import { Box, Flex } from "@mantine/core";

export function Content({ children }: { children: React.ReactNode }) {
  return (
    <Flex justify="center" py="lg" mt="4rem">
      <Box maw="80rem" px="xs">
        {children}
      </Box>
    </Flex>
  );
}
