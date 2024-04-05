import { Box, Divider, useMantineColorScheme, Text } from "@mantine/core";

export function About() {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Box>
      <Box
        ff="Oswald Variable, sans-serif"
        fz="2rem"
        c={colorScheme === "dark" ? "white" : "black"}
      >
        SOBRE
      </Box>
      <Divider
        mt="xs"
        mb="lg"
        // color="gray.6"
      />
      <Text
        // c="gray.3"
        fz="1.5rem"
        lh="lg"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe debitis
        accusamus, voluptas totam cupiditate nostrum culpa ducimus natus velit
        ad neque placeat aliquid quibusdam, adipisci voluptatibus tempore?
        Voluptatum iure facilis sit, natus, debitis reprehenderit aliquid
        dolorum sapiente minus laboriosam consequuntur! Cumque doloremque, eaque
        nobis cupiditate nam a delectus eos laboriosam!
      </Text>
    </Box>
  );
}
