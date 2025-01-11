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

function Artigo({ title, authors, details, year, href, boldAuthorIndex }: ArtigoProps) {
  const authorElements = authors.map((author, index) => (
    <React.Fragment key={index}>
      {index > 0 && ", "}
      {index === boldAuthorIndex ? (
        <b>{author}</b>
      ) : (
        author
      )}
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
      authors: ["Cunha, I. C.", "Silva, R. S."],
      title:
        "Particle Filters and Adaptive Metropolis-Hastings Sampling Applied to Volatitlity Models.",
      details:
        "Journal of Econometrics and Statistics, Vol. 5, Nº 1, 89-106.",
      year: "2025",
      href: "https://drive.google.com/file/d/15zTnEaucnHJj9po3TDx1P5AftAsTO4Sb/view?usp=sharing",
      boldAuthorIndex: 1,
    },
    {
      authors: ["Oliveira, L. M.", "Ramos, F. A. T.", "Silva, R. S."],
      title: "Stochastic Volatility Model via Gaussian Process.",
      details:
        "Journal of Econometrics and Statistics, Vol. 5, Nº 1, 1-13.",
        year: "2025",
      href: "https://drive.google.com/file/d/1sg6OGJaAVqKdmPuqhWFjm6qgtw73XrsO/view?usp=sharing",
      boldAuthorIndex: 2,
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
      details:
        "Journal of Econometrics and Statistics, Vol. 3, Nº 2, 157-184.",
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
    {
      authors: ["Nascimento, M. L.", "Barreto, L. M."],
      title:
        "Improving crime count forecasts in the city of Rio de Janeiro via reconciliation.",
      details: "Security Journal (to appear).",
      boldAuthorIndex: 0,
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
    </Content>
  );
}
