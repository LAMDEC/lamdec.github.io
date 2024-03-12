import { Anchor, Box, Button, Flex, Group } from "@mantine/core";
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
    <Flex
      // c="white"
      // bg="dark.7"
      h="6vh"
      justify="space-between"
      px="6rem"
      py="sm"
      align="center"
    >
      <Box fz="xl" lts="0.2rem">
        LAMDEC
      </Box>
      <nav>
        <Group>
          {headerItems}
        </Group>
      </nav>
      <ColorSchemeToggle />
    </Flex>
  );
}
