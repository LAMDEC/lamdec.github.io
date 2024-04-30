import { Box, Divider, useMantineColorScheme, Text } from "@mantine/core";

export function About() {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Box>
      <Box fz="2rem" c={colorScheme === "dark" ? "white" : "black"}>
        Sobre
      </Box>
      <Divider mt="xs" mb="lg" />
      <Text fz="1.4rem" lh="lg">
        O Laboratório de Métodos de Suporte à Tomada de Decisão (LAMDEC) está
        caracterizado como Grupo de Pesquisa, Desenvolvimento e Inovação (PD&I)
        do Instituto de Matemática (IM) da Universidade Federal do Rio de
        Janeiro (UFRJ). O objetivo principal do LAMDEC é dar suporte à tomada de
        decisão para gestores - públicos ou privados.
      </Text>
      <Text fz="1.4rem" lh="lg" mt={"md"}>
        Atualmente, os membros do LAMDEC são professores do IM-UFRJ, alunos da
        UFRJ de graduação e de pós-graduação de diversas áreas do conhecimento e
        pesquisadores doutores recém-formados (pós-docs) vinculados à UFRJ.{" "}
      </Text>
    </Box>
  );
}
