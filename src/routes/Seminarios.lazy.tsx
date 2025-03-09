import { createLazyFileRoute } from "@tanstack/react-router";
import { SeminariosPage } from "../SeminariosPage";

export const Route = createLazyFileRoute("/Seminarios")({
  component: SeminariosPage,
});
