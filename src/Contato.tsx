import {
    Box,
    Divider,
    List,
    useMantineColorScheme,
  } from "@mantine/core";
  import { Content } from "./Content";
  
  export function ContatoPage() {
    const { colorScheme } = useMantineColorScheme();

    return (
        <Content>
          <Box mt="1rem" fz="2rem" c={colorScheme === "dark" ? "white" : "black"}>
            Contato
          </Box>
          <Divider mt="xs" mb="lg" />
          <List fz="1.3rem" lh={"lg"} withPadding>
            <List.Item>
                lamdec@im.ufrj.br
            </List.Item>
          </List>
        </Content>
      );
    }