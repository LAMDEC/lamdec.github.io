import { Box, Divider } from "@mantine/core";

export function About() {
  return (
    <Box>
      <Box ff="Oswald Variable, sans-serif" fz="2rem">
        SOBRE
      </Box>
      <Divider mt="xs" mb="lg" color="gray.6" />
      <Box c="gray.3" fz="1.5rem" lh="lg">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe debitis
        accusamus, voluptas totam cupiditate nostrum culpa ducimus natus velit
        ad neque placeat aliquid quibusdam, adipisci voluptatibus tempore?
        Voluptatum iure facilis sit, natus, debitis reprehenderit aliquid
        dolorum sapiente minus laboriosam consequuntur! Cumque doloremque, eaque
        nobis cupiditate nam a delectus eos laboriosam!
      </Box>
    </Box>
  );
}
