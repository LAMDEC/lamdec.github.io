import { createLazyFileRoute } from "@tanstack/react-router";
import { About } from "../About";
import { Content } from "../Content";
import { Hero } from "../Hero";
import { Posts } from "../Posts";
import { useViewportSize } from "@mantine/hooks";
import { HeroMobile } from "../HeroMobile";
import { News } from "../News";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const { width } = useViewportSize();
  return (
    <>
      {width < 1000 ? <HeroMobile /> : <Hero />}
      <Content>
        <About />
        <Posts />
        <News />
      </Content>
    </>
  );
}
