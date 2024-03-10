import { Box, Flex } from "@mantine/core";

export function Header() {
  return (
    <Flex
      c="white"
      bg="dark.6"
      h="5vh"
      justify="space-between"
      px="6rem"
      py="sm"
    >
      <Box>LAMDEC</Box>
      <Flex gap="xl" c="gray.3">
        <Box>Equipe</Box>
        <Box>Projetos</Box>
        <Box>Artigos</Box>
        <Box>Sobre</Box>
      </Flex>
      <Box>Modo escuro</Box>
    </Flex>
  );
}
