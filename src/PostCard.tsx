import {
  Card,
  Text,
  Image,
  Group,
  Badge,
  Box,
  Flex,
  useMantineColorScheme,
} from "@mantine/core";
import { Link } from "@tanstack/react-router";

interface PostCardProps {
  image?: string;
  title: string;
  tags: string[];
  link: string;
  outgoing?: boolean;
  date: string;
}

export function PostCard({
  image,
  title,
  tags,
  link,
  date,
  outgoing = false,
}: PostCardProps) {
  const { colorScheme } = useMantineColorScheme();

  const renderTags = tags.map((tag, i) => (
    <Badge key={i} radius="sm" variant="light">
      {tag}
    </Badge>
  ));

  return (
    <Card shadow="xs" padding="lg" radius="sm" withBorder h="30rem">
      <Card.Section>
        <Link to={link} target={outgoing ? "_blank" : ""}>
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
      <Flex direction="column" h="100%" justify="space-between">
        <Box>
          <Box mt="md">
            <Group>{renderTags}</Group>
          </Box>
          <Box mt="md">
            <Text
              lineClamp={2}
              size="xl"
              c={colorScheme === "dark" ? "white" : "black"}
            >
              {title}
            </Text>
          </Box>
        </Box>
        <Text fz="sm">{date}</Text>
      </Flex>
    </Card>
  );
}
