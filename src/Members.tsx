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
            lattes={"http://lattes.cnpq.br/1513109865941797"}
            ORCID={"https://orcid.org/0000-0002-4311-6762 "}
            linkedin={"https://www.linkedin.com/in/ralph-silva-a82929297/"}
            github={"https://github.com/ralphssilva"}
          />
        ))}
      </SimpleGrid>
    </Content>
  );
}