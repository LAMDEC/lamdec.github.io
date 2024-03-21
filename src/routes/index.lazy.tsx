import { createLazyFileRoute } from "@tanstack/react-router";
import { About } from "../About";
import { Content } from "../Content";
import { Hero } from "../Hero";
import { Posts } from "../Posts";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Content>
        <About />
        <Posts />
      </Content>
    </>
  );
}

