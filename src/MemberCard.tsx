import {
  Card,
  Text,
  Image,
  Group,
  Badge,
  Button,
  Anchor,
  MantineColor,
  Stack,
  Avatar,
  Title,
  ActionIcon,
} from "@mantine/core";

import { FaGithub, FaOrcid, FaLinkedin } from "react-icons/fa";
import { MdPerson } from "react-icons/md";

interface MemberCardProps {
  image?: string;
  name: string;
  description: Array<string>;
  institution: string;
  lattes: string;
  ORCID: string;
  page?: string;
  linkedin: string;
  github: string;
}

export function MemberCard({
  image,
  name,
  description,
  institution,
  lattes,
  ORCID,
  page,
  linkedin,
  github,
}: MemberCardProps) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section pt={"md"} pl={"lg"}>
        <Stack mr={"md"} align="center">
          <Avatar src={image} radius="xl" size={"xl"} variant="white" />
          <Title order={2}>{name}</Title>
          <Text>{institution}</Text>
          {description.map((val) => (
            <Text key={val} size="sm">
              {val}
            </Text>
          ))}
        </Stack>
      </Card.Section>
      <Group justify="center" mt={"md"} pt={"md"}>
        {github && (
          <ActionIcon
            component="a"
            href={github}
            target="_blank"
            variant="transparent"
            aria-label="Github"
          >
            <FaGithub size={"lg"} color="black" />
          </ActionIcon>
        )}
        {lattes && (
          <ActionIcon
            component="a"
            href={lattes}
            target="_blank"
            variant="transparent"
            aria-label="ORCID"
          >
            <i className="ai ai-lattes ai-2x"></i>
          </ActionIcon>
        )}
        {ORCID && (
          <ActionIcon
            component="a"
            href={ORCID}
            target="_blank"
            variant="transparent"
            aria-label="Lattes"
          >
            <FaOrcid size={"lg"} color="green" />
          </ActionIcon>
        )}
        {page && (
          <ActionIcon
            component="a"
            href={page}
            target="_blank"
            variant="transparent"
            aria-label="Pagina pessoal"
          >
            <MdPerson size={"lg"} />
          </ActionIcon>
        )}
        {linkedin && (
          <ActionIcon
            component="a"
            href={linkedin}
            target="_blank"
            variant="transparent"
            aria-label="Pagina pessoal"
          >
            <FaLinkedin size={"lg"} />
          </ActionIcon>
        )}
      </Group>
    </Card>
  );
}
