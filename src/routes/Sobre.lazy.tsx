import { createLazyFileRoute } from "@tanstack/react-router";
import { AboutPage } from "../AboutPage";

export const Route = createLazyFileRoute("/Sobre")({
  component: AboutPage,
});
