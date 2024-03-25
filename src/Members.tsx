import { Box, Divider, SimpleGrid, useMantineColorScheme } from "@mantine/core";
import { MemberCard } from "./MemberCard";
import { Content } from "./Content";

export function Members() {
  return (
    <Content>
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={"xl"}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((val) => (
          <MemberCard
            key={val}
            image={"https://avatars.githubusercontent.com/u/138714255?v=4"}
            name={"Ralph Silva"}
            description={[
              "Professor Associado",
              "Departamento de Métodos Estatísticos",
              "Instituto de Matemática",
            ]}
            page={"https://www.im.ufrj.br/ralph"}
            institution={"Universidade Federal do Rio de Janeiro"}
            lattes={"xxxxx"}
            ORCID={"xxxxxx"}
            linkedin={"xxxxxx"}
            github={"https://github.com/ralphssilva"}
          />
        ))}
      </SimpleGrid>
    </Content>
  );
}
