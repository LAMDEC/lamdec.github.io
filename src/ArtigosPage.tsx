import {
  Anchor,
  Box,
  Divider,
  List,
  useMantineColorScheme,
} from "@mantine/core";
import { Content } from "./Content";

export function ArtigosPage() {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Content>
      <Box mt="1rem" fz="2rem" c={colorScheme === "dark" ? "white" : "black"}>
        Artigos
      </Box>
      <Divider mt="xs" mb="lg" />
      <List fz="1.3rem" lh={"lg"} withPadding>
        <List.Item>
          Gomes, A., <b>Neves, W.</b> (2024). The Hele-Shaw free boundary limit
          of Buckley-Leverett System. Preprint.
          <Anchor
            href="https://arxiv.org/abs/2404.09781"
            target="_blank"
            ml={"xs"}
          >
            [Link]
          </Anchor>
        </List.Item>
        <List.Item>
          Arroyo, A. H., <b>Silva, R. S.</b>, Migon, H. S. (2023). Bayesian
          Quantile Stochastic Frontier Models. Journal of Econometrics and
          Statistics, Vol. 3, Nº 2, 157-184.
          <Anchor
            href="https://www.arfjournals.com/image/catalog/Journals%20Papers/JES%20/2023/No%202%20(2023)/Article_4.pdf"
            target="_blank"
            ml={"xs"}
          >
            [Link]
          </Anchor>
        </List.Item>
        <List.Item>
          Chemetov, N., <b>Neves, W.</b> (2014). On a generalized
          Muskat–Brinkman type problem. Interfaces and Free Boundaries -
          Mathematical Analysis, Computation and Applications, Vol. 16, Nº 3,
          339-357.
          <Anchor
            href="https://www.doi.org/10.4171/IFB/322"
            target="_blank"
            ml={"xs"}
          >
            [Link]
          </Anchor>
        </List.Item>
        <List.Item>
          Chemetov, N., <b>Neves, W.</b> (2013). The Generalized
          Buckley–Leverett System: Solvability. Arch Rational Mech Anal, Vol.
          208, 1–24.
          <Anchor
            href="https://doi.org/10.1007/s00205-012-0591-7"
            target="_blank"
            ml={"xs"}
          >
            [Link]
          </Anchor>
        </List.Item>
        <List.Item>
          <b>Nascimento, M. L.</b>, Barreto, L. M. Improving crime count
          forecasts in the city of Rio de Janeiro via reconciliation. Security
          Journal (to appear)
        </List.Item>
      </List>
    </Content>
  );
}
