import { Box, Flex, Image, useMantineColorScheme } from "@mantine/core";
import lamdec from "../public/lamdec.png";
import ufrj_dark from "../public/ufrj-negativo.png";
import ufrj_light from "/ufrj.png";
import "./Hero.css";

export function HeroMobile() {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Flex mih="92vh" mt="8vh">
      <Box w="100%" fz="2rem">
        <Flex h="100%" direction="column" justify="center">
          <Box
            ta="center"
            style={{
              fontWeight: 700,
              letterSpacing: "0.3rem",
              lineHeight: "3.5rem",
            }}
          >
            <Box id="linha1">Laboratório de</Box>
            <Box id="linha2">Métodos de Suporte</Box>
            <Box id="linha3">à Tomada de Decisão</Box>
          </Box>
          <Flex direction="column" justify="center" align="center">
            <Image maw="20rem" w="60%" id="logo" src={lamdec} />
            <Image
              maw="20rem"
              w="60%"
              id="logo"
              src={colorScheme == "dark" ? ufrj_dark : ufrj_light}
            />
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
