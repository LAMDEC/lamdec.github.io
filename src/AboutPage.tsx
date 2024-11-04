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
      <Box mt="1rem" fz="2rem" c={colorScheme === "dark" ? "white" : "black"}>
        Parceria com a PGM-Rio
      </Box>
      <Divider mt="xs" mb="lg" />

      <Text fz="1.3rem" lh="lg" mt={"md"}>
        A aplicação da Inteligência Artificial (IA) à Dívida Ativa da
        Procuradoria Geral do Município do Rio de Janeiro (PGM-Rio) representa
        uma inovação no campo da administração pública, especialmente na gestão
        de dados e execuções fiscais. A utilização de IA nesse contexto permite
        que processos repetitivos e volumosos sejam automatizados, garantindo
        maior agilidade, eficiência e precisão na recuperação de créditos
        municipais.
      </Text>
      <Text fz="1.3rem" lh="lg" mb={"md"}>
        Principais Benefícios da IA na Dívida Ativa da PGM-Rio:{" "}
      </Text>
      <List fz="1.3rem" lh={"lg"} withPadding mb={"md"}>
        <List.Item>
          Automatização de Processos: através de algoritmos avançados, a IA pode
          automatizar o monitoramento de débitos inscritos em dívida ativa,
          agilizando a triagem e priorização dos processos com maiores chances
          de êxito.
        </List.Item>
        <List.Item>
          Análise Preditiva: com base em dados históricos, a IA pode prever
          quais devedores têm maior probabilidade de quitar suas dívidas e quais
          casos podem demandar maior tempo ou esforço. Essa análise permite uma
          abordagem mais estratégica, otimizando os recursos da Procuradoria.
        </List.Item>
        <List.Item>
          Redução de Erros: a automação proporcionada pela IA minimiza a
          ocorrência de erros humanos em etapas cruciais, como a inclusão e
          exclusão de débitos, o cálculo de juros e multas, e o envio de
          notificações aos devedores.
        </List.Item>
        <List.Item>
          Otimização de Cobranças: a IA pode sugerir as melhores práticas de
          negociação e cobrança, personalizando as abordagens de acordo com o
          perfil do devedor, aumentando a eficácia na recuperação de receitas.
        </List.Item>
        <List.Item>
          Gestão de Grandes Volumes de Dados: a IA facilita o gerenciamento de
          um grande volume de informações fiscais e financeiras, permitindo que
          a PGM-Rio tenha um panorama claro e atualizado da Dívida Ativa,
          favorecendo decisões mais informadas.
        </List.Item>
      </List>
      <Text fz="1.3rem" lh="lg" mb={"md"}>
      Impacto no Dia a Dia da PGM-Rio:
      </Text>
      <Text fz="1.3rem" lh="lg" mb={"md"}>
      A aplicação de IA na Dívida Ativa promove uma mudança de paradigma na maneira como os casos de inadimplência são tratados. Em vez de depender unicamente de processos manuais e burocráticos, a Procuradoria pode agora se valer de ferramentas tecnológicas para otimizar o tempo dos servidores, focando em casos mais complexos e deixando os processos mais simples para a automação.
      </Text>
      <Text fz="1.3rem" lh="lg" mb={"md"}>Além disso, a IA pode gerar relatórios detalhados e em tempo real sobre a situação das cobranças, ajudando os gestores a tomarem decisões mais ágeis e embasadas. Essa transformação digital na PGM-Rio posiciona o município como referência no uso de tecnologia para a administração pública, contribuindo diretamente para a modernização e eficiência do setor público.
      </Text>
      <Text fz="1.3rem" lh="lg" mb={"md"}>Essas inovações refletem a tendência de integração tecnológica nas práticas de gestão fiscal, e demonstram como o uso de IA pode melhorar a eficiência operacional e  também fortalecer o cumprimento das obrigações fiscais e a arrecadação de tributos.</Text>
      <Text fz="1.3rem" lh="lg" mb={"md"}>A colaboração entre a academia e a administração pública é fundamental para o desenvolvimento de metodologias inovadoras e sustentáveis, especialmente no campo da Inteligência Artificial (IA). A academia, com sua capacidade de pesquisa e análise crítica, oferece um ambiente propício para o desenvolvimento de soluções tecnológicas que podem ser aplicadas diretamente em desafios práticos enfrentados pelas procuradorias e demais órgãos públicos.</Text>
      <Text fz="1.3rem" lh="lg" mb={"md"}>Nesse sentido, o Laboratório de Métodos de Suporte à Tomada de Decisão - LAMDEC, no Instituto de Matemática da UFRJ, é importante nessa conexão. O LAMDEC tem como proposta estudar, desenvolver e promover a IA para atuar de forma ativa no processo de tomada de decisão. O LAMDEC, além de ser um espaço para a formação de novos talentos, propicia a integração entre conhecimento acadêmico e as demandas reais da administração pública, como a gestão da Dívida Ativa da PGM-Rio.</Text>
      <Text fz="1.3rem" lh="lg" mb={"md"}>A pesquisa desenvolvida no LAMDEC, por exemplo, pode fornecer metodologias robustas para a aplicação de IA na análise preditiva, na otimização de cobranças e na criação de novos algoritmos capazes de automatizar processos complexos com maior precisão. Além disso, o laboratório permite a criação de soluções personalizadas para os desafios específicos da administração pública, promovendo inovações que não só aumentam a eficiência, mas também garantem que essas inovações sejam sustentáveis e replicáveis.</Text>
      <Text fz="1.3rem" lh="lg" mb={"md"}>É essencial reconhecer que, sem o apoio contínuo da academia, o avanço das tecnologias de IA aplicadas à Dívida Ativa seria limitado. A academia desenvolve novas tecnologias e analisa seus impactos, garantindo que as metodologias sejam éticas, transparentes e focadas em resultados que beneficiem tanto o setor público quanto a sociedade em geral.</Text>
      <Text fz="1.3rem" lh="lg" mb={"md"}>Dessa forma, o LAMDEC desempenha um papel crucial na modernização da administração pública, criando uma ponte entre o conhecimento teórico e as necessidades práticas, permitindo que a IA transforme processos como a gestão da Dívida Ativa de forma eficiente e inovadora.</Text>
    </Content>
  );
}
