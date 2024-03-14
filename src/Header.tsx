import { Anchor, Box, Button, Divider, Flex, Group, Stack } from "@mantine/core";
import { ColorSchemeToggle } from "./ColorSchemeToggle";

const links = [
  { link: "/equipe", label: "Equipe" },
  { link: "/projetos", label: "Projetos" },
  { link: "/artigos", label: "Artigos" },
  { link: "/sobre", label: "Sobre" },
];

export function Header() {
  const headerItems = links.map((link) => (
    <Anchor href={link.link}>
      <Button variant="subtle" color="gray" radius="md">
        {link.label}
      </Button>
    </Anchor>
  ));

  return (
    <Stack gap={0}>
    <Flex
      // c="white"
      // bg="dark.7"
      h="8vh"
      justify="space-between"
      px="6rem"
      align="center"
      >
      <Box fz="xl" lts="0.2rem">
        LAMDEC
      </Box>
      <nav>
        <Group>{headerItems}</Group>
      </nav>
      <ColorSchemeToggle />
    </Flex>
    <Divider/>
      </Stack>
    
  );
}
