import {
  Anchor,
  Box,
  Divider,
  List,
  useMantineColorScheme,
} from "@mantine/core";
import { Content } from "./Content";
import React from "react";

interface ArtigoProps {
  title: string;
  authors: string[];
  details: string;
  year?: string;
  href?: string;
  boldAuthorIndex: number;
}

function Artigo({
  title,
  authors,
  details,
  year,
  href,
  boldAuthorIndex,
}: ArtigoProps) {
  const authorElements = authors.map((author, index) => (
    <React.Fragment key={index}>
      {index > 0 && ", "}
      {index === boldAuthorIndex ? <b>{author}</b> : author}
    </React.Fragment>
  ));

  return (
    <List.Item>
      {authorElements} {year ? `(${year}).` : ""} {title} {details}
      {href && (
        <Anchor href={href} target="_blank" ml={"xs"}>
          [Link]
        </Anchor>
      )}
    </List.Item>
  );
}

export function ArtigosPage() {
  const { colorScheme } = useMantineColorScheme();

  const artigos: ArtigoProps[] = [
    {
      authors: ["Chou, H.-H.", "Maly, J.", "Verdun, C. M.", "Costa, B. F. P.", "Mirandola, H."],
      title: "Get rid of your constraints and reparametrize: A study in NNLS and implicit bias.",
      details: "AISTATS 2025 (to appear)",
      year: "2025",
      boldAuthorIndex: 4,
    },
    {
      authors: ["Cunha, I. C.", "Silva, R. S."],
      title:
        "Particle Filters and Adaptive Metropolis-Hastings Sampling Applied to Volatitlity Models.",
      details: "Journal of Econometrics and Statistics, Vol. 5, Nº 1, 89-106.",
      year: "2025",
      href: "https://drive.google.com/file/d/15zTnEaucnHJj9po3TDx1P5AftAsTO4Sb/view?usp=sharing",
      boldAuthorIndex: 1,
    },
    {
      authors: ["Oliveira, L. M.", "Ramos, F. A. T.", "Silva, R. S."],
      title: "Stochastic Volatility Model via Gaussian Process.",
      details: "Journal of Econometrics and Statistics, Vol. 5, Nº 1, 1-13.",
      year: "2025",
      href: "https://drive.google.com/file/d/1sg6OGJaAVqKdmPuqhWFjm6qgtw73XrsO/view?usp=sharing",
      boldAuthorIndex: 2,
    },
    {
      authors: ["Nascimento, M. L.", "Barreto, L. M."],
      title: "Improving crime count forecasts in the city of Rio de Janeiro via reconciliation.",
      year: "2024",
      details: "Security Journal, Vol. 37, 1597-1618.",
      href: "https://doi.org/10.1057/s41284-024-00433-5",
      boldAuthorIndex: 0,
    },
    {
      authors: ["Gomes, A.", "Neves, W."],
      title: "The Hele-Shaw free boundary limit of Buckley-Leverett System.",
      details: "Preprint.",
      href: "https://arxiv.org/abs/2404.09781",
      year: "2024",
      boldAuthorIndex: 1,
    },
    {
      authors: ["Arroyo, A. H.", "Silva, R. S.", "Migon, H. S."],
      title: "Bayesian Quantile Stochastic Frontier Models.",
      details: "Journal of Econometrics and Statistics, Vol. 3, Nº 2, 157-184.",
      href: "https://drive.google.com/file/d/19cnn3m-xO9R3li-9EAB9hRVkUKfrfz9Z/view?usp=sharing",
      year: "2023",
      boldAuthorIndex: 1,
    },
    {
      authors: ["Chemetov, N.", "Neves, W."],
      title: "On a generalized Muskat–Brinkman type problem.",
      details:
        "Interfaces and Free Boundaries - Mathematical Analysis, Computation and Applications, Vol. 16, Nº 3, 339-357.",
      href: "https://www.doi.org/10.4171/IFB/322",
      year: "2014",
      boldAuthorIndex: 1,
    },
    {
      authors: ["Chemetov, N.", "Neves, W."],
      title: "The Generalized Buckley–Leverett System: Solvability.",
      details: "Arch Rational Mech Anal, Vol. 208, 1–24.",
      href: "https://doi.org/10.1007/s00205-012-0591-7",
      year: "2013",
      boldAuthorIndex: 1,
    },
  ];

  return (
    <Content>
      <Box mt="1rem" fz="2rem" c={colorScheme === "dark" ? "white" : "black"}>
        Artigos
      </Box>
      <Divider mt="xs" mb="lg" />
      <List fz="1.3rem" lh={"lg"} withPadding spacing={"md"}>
        {artigos.map((artigo, index) => (
          <Artigo key={index} {...artigo} />
        ))}
      </List>
      <Box mt="1rem" fz="2rem" c={colorScheme === "dark" ? "white" : "black"}>
        Apresentação de Trabalhos
      </Box>
      <Divider mt="xs" mb="lg" />
      <List fz="1.3rem" lh={"lg"} withPadding spacing={"md"}>
        <List.Item>
          Pedro Henrique Honorio Saito - 13ª SIAC - Otimização de Performance em Bancos de Dados: Eficiência e Análise em Ambientes Relacionais. <Anchor target="_blank" href="https://drive.google.com/file/d/1mWK84madhURTvbNIqAA9ylGMDGG4Neeg/view?usp=drive_link">[Link]</Anchor><Anchor target="_blank" href="https://drive.google.com/file/d/1v0VChhazyQeTdg0XBQKJH55Mrm2qVzek/view?usp=drive_link">[Certificado]</Anchor>
        </List.Item>
        <List.Item>
          Matheus Vargas e Rafael Schmidt - 13ª SIAC - Apresentação de Resultados da Modelagem dos Devedores do Município do Rio de Janeiro via Dashboard. <Anchor target="_blank" href="https://drive.google.com/file/d/1wblxR3UwLtPrmQj7ADkZMg85eFMpeVes/view?usp=drive_link">[Certificado Menção Honrosa]</Anchor>
        </List.Item>
        <List.Item>
          Leon Martins Uchoa Barboza- 13ª SIAC - Aplicação Da Análise De Sobrevivência Para Previsão De Quitação De Créditos Em Dívida Ativa. <Anchor target="_blank" href="https://drive.google.com/file/d/1DRDPDXofhFE4ZI2xvq30halo5q6gyC2E/view?usp=drive_link">[Certificado]</Anchor>
        </List.Item>
        <List.Item>
          Matheus Vargas e Rafael Schmidt - XLV JICTAC - Apresentação de Resultados da Modelagem dos Devedores do Município do Rio de Janeiro via Dashboard. <Anchor target="_blank" href="https://drive.google.com/file/d/15Ku6KBH7c6KZcL6OIM2LmsPlFJOSS-qf/view?usp=drive_link">[Link]</Anchor><Anchor target="_blank" href="https://drive.google.com/file/d/1QknnYo26qtsCuUWuKcm76i1mBkb5ieP-/view?usp=drive_link">[Certificado]</Anchor>
        </List.Item>
        <List.Item>
          Paulo Silva Filho - XLV JICTAC - Otimização de Performance em Bancos de Dados: Eficiência e Análise em Ambientes Relacionais. <Anchor target="_blank" href="https://drive.google.com/file/d/1WWNX5NWuJwGf4M-Wn5bC1cnNjDwoAhSp/view?usp=drive_link">[Link]</Anchor><Anchor target="_blank" href="https://drive.google.com/file/d/1y1HpbbeX6pTOiXoAtxYmIZ8cml0MrL86/view?usp=drive_link">[Certificado Menção Honrosa]</Anchor>
        </List.Item>
        <List.Item>
          Leon Martins Uchoa Barboza- XLV JICTAC - Classificação E Ordenação De Devedores Quanto À Probabilidade De Pagamento Da Dívida. <Anchor target="_blank" href="https://drive.google.com/file/d/1DtLs1L_j0ZODNpLXm1r4j8jjxclqa_8a/view?usp=drive_link">[Certificado]</Anchor>
        </List.Item>
      </List>
    </Content>
  );
}
