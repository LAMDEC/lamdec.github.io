import { Box, Divider, useMantineColorScheme, Text, List } from "@mantine/core";
import { Content } from "./Content";

export function AboutPage() {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Content>
      <Box mt="1rem" fz="2rem" c={colorScheme === "dark" ? "white" : "black"}>
        Sobre o LAMDEC
      </Box>
      <Divider mt="xs" mb="lg" />
      <Text fz="1.3rem" lh="lg">
        O Laboratório de Métodos de Suporte à Tomada de Decisão (LAMDEC) está
        caracterizado como Grupo de Pesquisa, Desenvolvimento e Inovação (PD&I)
        do Instituto de Matemática (IM) da Universidade Federal do Rio de
        Janeiro (UFRJ). O objetivo principal do LAMDEC é dar suporte à tomada de
        decisão para gestores - públicos ou privados.
      </Text>
      <Text fz="1.3rem" lh="lg" mb={"md"}>
        Neste sentido, pode-se destacar as seguintes etapas do processo de PD&I:
      </Text>
      <List fz="1.3rem" lh={"lg"} withPadding>
        <List.Item>Definições do problema e do contexto;</List.Item>
        <List.Item>
          Obtenção de um conjunto de informações disponíveis (possivelmente)
          através de banco de dados;
        </List.Item>
        <List.Item>
          Obtenção de informações sobre as diversas fases envolvidas no
          problema;
        </List.Item>
        <List.Item>
          Análise exploratória de dados; preparação e adequação dos dados;
        </List.Item>
        <List.Item>
          Escolha e seleção de modelos (aprendizagem de máquina, estatísticos,
          econométricos, cadeias de Markov, etc.);
        </List.Item>
        <List.Item>
          Treino e teste de modelos e validação de resultados do modelo
          proposto;
        </List.Item>
        <List.Item>
          Desenvolvimento de protótipo e apresentação dos resultados obtidos;
        </List.Item>
        <List.Item>Elaboração de artigos científicos.</List.Item>
      </List>
      <Text fz="1.3rem" lh="lg" my={"md"}>
        As metas PD&I fundamentais do LAMDEC são as seguintes:
      </Text>
      <List fz="1.3rem" lh={"lg"} withPadding>
        <List.Item>
          Pesquisa e o desenvolvimento de novas técnicas de aprendizagem de
          máquina e de novos modelos estatísticos;
        </List.Item>
        <List.Item>
          Pesquisa e o desenvolvimento de novas abordagens para o suporte à
          tomada de decisão;
        </List.Item>
        <List.Item>
          Pesquisa e a inovação adequadas ao problema e ao contexto em mãos
        </List.Item>
      </List>
      <Text fz="1.3rem" lh="lg" mt={"md"}>
        Ademais, o LAMDEC visa também a capacitação de pessoas através de cursos
        e de treinamentos em áreas do conhecimento envolvidas nos diversos
        projetos ou de interesse para o processo de PD&I. Atualmente, os membros
        do LAMDEC são professores do IM-UFRJ, alunos da UFRJ de graduação e de
        pós-graduação de diversas áreas do conhecimento e pesquisadores doutores
        recém-formados (pós-docs) vinculados à UFRJ.
      </Text>
    </Content>
  );
}
