import {
  Badge,
  Group,
  useMantineColorScheme,
  Text,
  Image,
  Card,
  Button,
  Box,
  Divider,
  SimpleGrid,
} from "@mantine/core";
import { Content } from "./Content";
import { Link } from "@tanstack/react-router";

export function ProjectsPage() {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Content>
      <Box mt="1rem" fz="2rem" c={colorScheme === "dark" ? "white" : "black"}>
        Projetos
      </Box>
      <Divider mt="xs" mb="lg" />
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }} spacing={"xl"}>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Image src="./dash.png" height={400} alt="Car" />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Dashboard PGM</Text>
            <Group>
              <Badge color="blue" variant="light">
                Typescript
              </Badge>
              <Badge color="yellow" variant="light">
                Python
              </Badge>
            </Group>
          </Group>

          <Text size="sm" c="dimmed">
            Dashboard interativo para visualização da análise, classificação e
            ordenação dos devedores da capital do Rio de Janeiro.
          </Text>
          {/* TODO: colocar link pra demo */}
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="light" color="blue" fullWidth mt={"md"}>
              Ver demo
            </Button>
          </Link>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Image src="./dash.png" height={400} alt="Car" />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Dashboard PGM</Text>
            <Group>
              <Badge color="blue" variant="light">
                Typescript
              </Badge>
              <Badge color="yellow" variant="light">
                Python
              </Badge>
            </Group>
          </Group>

          <Text size="sm" c="dimmed">
            Dashboard interativo para visualização da análise, classificação e
            ordenação dos devedores da capital do Rio de Janeiro
          </Text>
          {/* TODO: colocar link pra demo */}
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="light" color="blue" fullWidth mt={"md"}>
              Ver demo
            </Button>
          </Link>
        </Card>
      </SimpleGrid>
    </Content>
  );
}

{
}
