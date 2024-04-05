import {
  Burger,
  Button,
  Divider,
  Flex,
  Group,
  Stack,
  Drawer,
  ScrollArea,
  UnstyledButton,
  Center,
  rem,
} from "@mantine/core";
import { ColorSchemeToggle } from "./ColorSchemeToggle";
import { Link, Outlet, ScrollRestoration } from "@tanstack/react-router";
import { useDisclosure } from "@mantine/hooks";

const links = [
  { link: "/equipe", label: "Equipe" },
  { link: "/projetos", label: "Projetos" },
  { link: "/artigos", label: "Artigos" },
  { link: "/sobre", label: "Sobre" },
];

export function Header() {
  const [opened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const headerItems = links.map((link, i) => (
    <Link key={i} to={link.link} onClick={closeDrawer}>
      <Button variant="subtle" color="gray" radius="md" w={"100%"}>
        {link.label}
      </Button>
    </Link>
  ));

  return (
    <>
      <Stack w="100dvw" gap={0}>
        <header>
          <Flex h="8vh" justify="space-between" px="xl" align="center">
            <Burger
              opened={opened}
              onClick={toggleDrawer}
              hiddenFrom="xs"
              size="sm"
            />
            <Link to="/">
              <Button variant="transparent" color="gray" fz="xl" lts="0.2rem">
                LAMDEC
              </Button>
            </Link>
            <Group visibleFrom="xs" wrap="nowrap" gap={0}>
              {headerItems}
            </Group>
            <ColorSchemeToggle />
          </Flex>
        </header>
        <Divider />
      </Stack>
      <ScrollRestoration />
      <Outlet />
      <Drawer
        opened={opened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navegação"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <Stack h={`calc(100vh - ${rem(80)})`} mx="-md" gap={rem(50)}>
          <Divider my={0} />
          <Link key={"home"} to={"/"} onClick={closeDrawer}>
            <Button variant="subtle" color="gray" radius="md" w={"100%"}>
              Home
            </Button>
          </Link>
          {headerItems}
        </Stack>
      </Drawer>
    </>
  );
}
