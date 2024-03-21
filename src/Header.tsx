import { Anchor, Button, Divider, Flex, Group, Stack } from "@mantine/core";
import { ColorSchemeToggle } from "./ColorSchemeToggle";
import { Link, Outlet } from "@tanstack/react-router";

const links = [
  { link: "/equipe", label: "Equipe" },
  { link: "/projetos", label: "Projetos" },
  { link: "/artigos", label: "Artigos" },
  { link: "/sobre", label: "Sobre" },
];

export function Header() {
  const headerItems = links.map((link, i) => (
    <Link key={i} to={link.link}>
      <Button variant="subtle" color="gray" radius="md">
        {link.label}
      </Button>
    </Link>
  ));

  return (
    <>
      <Stack w="100dvw" gap={0}>
        <Flex h="8vh" justify="space-between" px="6rem" align="center">
          <Link to="/">
            <Button variant="transparent" color="gray" fz="xl" lts="0.2rem">
              LAMDEC
            </Button>
          </Link>
          <nav>
            <Group>{headerItems}</Group>
          </nav>
          <ColorSchemeToggle />
        </Flex>
        <Divider />
      </Stack>
      <Outlet />
    </>
  );
}
