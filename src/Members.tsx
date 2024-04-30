import { Box, Divider, SimpleGrid, useMantineColorScheme } from "@mantine/core";
import { MemberCard } from "./MemberCard";
import { Content } from "./Content";
import { membros } from "../public/membros";

export function Members() {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Content>
      <Box mt="1rem" fz="2rem" c={colorScheme === "dark" ? "white" : "black"}>
        Coordenadores
      </Box>
      <Divider mt="xs" mb="lg" />
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={"xl"}>
        {membros
          .filter((membro) => membro.role === "docente")
          .sort((membro1, membro2) => membro1.name.localeCompare(membro2.name))
          .map((membro, val) => (
            <MemberCard
              key={val}
              image={membro.image}
              name={membro.name}
              description={membro.description}
              page={membro.page}
              institution={membro.institution}
              lattes={membro.lattes}
              ORCID={membro.ORCID}
              linkedin={membro.linkedin}
              github={membro.github}
              role={membro.role}
            />
          ))}
      </SimpleGrid>
      <Box mt="1rem" fz="2rem" c={colorScheme === "dark" ? "white" : "black"}>
        Equipe
      </Box>
      <Divider mt="xs" mb="lg" />
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={"xl"}>
        {membros
          .filter((membro) => membro.role === "discente")
          .sort((membro1, membro2) => membro1.name.localeCompare(membro2.name))
          .map((membro, val) => (
            <MemberCard
              key={val}
              image={membro.image}
              name={membro.name}
              description={membro.description}
              page={membro.page}
              institution={membro.institution}
              lattes={membro.lattes}
              ORCID={membro.ORCID}
              linkedin={membro.linkedin}
              github={membro.github}
              role={membro.role}
            />
          ))}
      </SimpleGrid>
    </Content>
  );
}
