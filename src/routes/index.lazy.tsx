import { createLazyFileRoute } from "@tanstack/react-router";
import { About } from "../About";
import { Content } from "../Content";
import { Hero } from "../Hero";
import { Posts } from "../Posts";
import { useMediaQuery } from "@mantine/hooks";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const matches = useMediaQuery('(min-width: 56.25em)');
  return (
    <>
      {matches && <Hero />}
      <Content>
        <About />
        <Posts />
      </Content>
    </>
  );
}

