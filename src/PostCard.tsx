import {
  Card,
  Text,
  Image,
  Group,
  Badge,
  Button,
  Anchor,
  MantineColor,
} from "@mantine/core";

interface PostCardProps {
  image?: string;
  title: string;
  tags: Array<[string, MantineColor]>;
  description: string;
  link: string;
}

export function PostCard({
  image,
  title,
  tags,
  description,
  link,
}: PostCardProps) {

  const renderTags = tags.map((tag) => (
    <Badge color={tag[1]} variant="light">
      {tag[0]}
    </Badge>
  ));

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={
            image
              ? image
              : "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          height={160}
          alt="Description image"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={600} size="xl">{title}</Text>
        <Group>{renderTags}</Group>
      </Group>

      <Text size="sm">{description}</Text>
      <Anchor href={link} target="_blank">
        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          Ler mais
        </Button>
      </Anchor>
    </Card>
  );
}
