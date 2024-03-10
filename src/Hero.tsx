import { Box, Button, Flex, Image } from "@mantine/core";
import lamdec from "../public/lamdec.png";
import { MdOutlineArrowDownward } from "react-icons/md";

export function Hero() {
  return (
    <Flex h="95vh">
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
            <Box>Laboratório de Métodos</Box>
            <Box>de Suporte à</Box>
            <Box>Tomada de Decisão</Box>
          </Box>
          <Flex justify="center" mt="6rem" gap="xl">
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
        <Flex h="80%" direction="column" justify="center" px="xl">
          <Image src={lamdec} />
        </Flex>
      </Box>
    </Flex>
  );
}
