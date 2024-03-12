import { Box, Flex } from "@mantine/core";

export function Content({ children }: { children: React.ReactNode }) {
  return (
    <Flex justify="center" py="6rem"
    // bg="dark.7"
    // c="white"
    my="auto">
      <Box maw="80rem" px="1rem">
        {children}
      </Box>
    </Flex>
  );
}
