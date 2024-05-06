import { createLazyFileRoute } from "@tanstack/react-router";
import { ArtigosPage } from "../ArtigosPage";

export const Route = createLazyFileRoute("/Artigos")({
  component: ArtigosPage,
});
