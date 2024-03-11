import { Box, Flex } from "@mantine/core";

export function Header() {
  return (
    <Flex
      c="white"
      bg="dark.6"
      h="6vh"
      justify="space-between"
      px="6rem"
      py="sm"
      align="center"
      ff="mono"
    >
      <Box fz="xl">LAMDEC</Box>
      <Flex fz="lg" gap="xl" c="gray.3">
        <Box>Equipe</Box>
        <Box>Projetos</Box>
        <Box>Artigos</Box>
        <Box>Sobre</Box>
      </Flex>
      <Box>Modo escuro</Box>
    </Flex>
  );
}
