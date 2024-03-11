import { Box, Button, Flex, Image } from "@mantine/core";
import lamdec from "../public/lamdec.png";
import ufrj from "../public/ufrj-negativo.png";
import { MdOutlineArrowDownward } from "react-icons/md";
import "./Hero.css";

export function Hero() {
  return (
    <Flex h="94vh">
      <Box
        w="65%"
        bg="dark.5"
        c="gray.2"
        style={{ fontFamily: "sans-serif", fontSize: "4rem" }}
      >
        <Flex h="100%" direction="column" justify="center">
          <Box
            ta="center"
            style={{
              fontWeight: 800,
              textTransform: "uppercase",
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
              Projetos
            </Button>
            <Button size="xl" rightSection={<MdOutlineArrowDownward />}>
              Artigos
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Box w="35%" bg="dark.9">
        <Flex h="100%" direction="column" justify="center" px="xl">
          <Image id="logo" src={lamdec} />
          <Image id="logo" src={ufrj} />
        </Flex>
      </Box>
    </Flex>
  );
}
