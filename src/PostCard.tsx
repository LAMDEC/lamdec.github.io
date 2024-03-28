import {
  Card,
  Text,
  Image,
  Group,
  Badge,
  MantineColor,
  Box,
  Flex,
  useMantineColorScheme,
} from "@mantine/core";
import { Link } from "@tanstack/react-router";

interface PostCardProps {
  image?: string;
  title: string;
  tags: Array<[string, MantineColor]>;
  description: string;
  link: string;
}

export function PostCard({ image, title, tags, link }: PostCardProps) {
  const { colorScheme } = useMantineColorScheme();

  const renderTags = tags.map((tag, i) => (
    <Badge key={i} color={tag[1]} radius="sm" variant="light">
      {tag[0]}
    </Badge>
  ));

  return (
    <Card shadow="xs" padding="lg" radius="sm" withBorder h="28rem">
      <Card.Section>
        <Link to={link}>
          <Image
            src={
              image
                ? image
                : "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            height={300}
            alt="Description image"
          />
        </Link>
      </Card.Section>
      <Flex mt="md" justify="space-between">
        <Group>{renderTags}</Group>
        <Text fz="sm">19/03/2024</Text>
      </Flex>
      <Box mt="md">
        <Text size="xl" c={colorScheme === "dark" ? "white" : "black"}>
          {title}
        </Text>
      </Box>
    </Card>
  );
}
