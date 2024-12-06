import { Box, Button, Flex, Image, useMantineColorScheme } from "@mantine/core";
import lamdec from "../public/lamdec.png";
import lamdec_dark_mode from "../public/lamdec_escuro.png";
import ufrj_dark from "../public/ufrj-negativo.png";
import ufrj_light from "/ufrj.png";
import { MdOutlineArrowDownward } from "react-icons/md";
import "./Hero.css";

export function Hero() {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Flex h="92vh" mt="8vh" px="6rem">
      <Box w="65%" fz="4rem">
        <Flex h="100%" direction="column" justify="center">
          <Box
            ta="center"
            style={{
              fontWeight: 700,
              letterSpacing: "0.3rem",
              lineHeight: "7rem",
            }}
          >
            <Box id="linha1">Laboratório de Métodos</Box>
            <Box id="linha2">de Suporte à</Box>
            <Box id="linha3">Tomada de Decisão</Box>
          </Box>
          <Flex id="buttons" justify="center" mt="6rem" gap="4rem">
            <Button size="xl" rightSection={<MdOutlineArrowDownward />}>
              Posts
            </Button>
            <Button variant="outline" size="xl" component="a" href="/#/contato">
              Contato
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Box w="35%">
        <Flex
          h="100%"
          direction="column"
          align="center"
          justify="center"
          px="sm"
        >
          <Image
            maw={360}
            id="logo_lamdec"
            src={colorScheme == "dark" ? lamdec_dark_mode : lamdec}
          />
          <Image
            maw={500}
            id="logo_ufrj"
            src={colorScheme == "dark" ? ufrj_dark : ufrj_light}
          />
        </Flex>
      </Box>
    </Flex>
  );
}
