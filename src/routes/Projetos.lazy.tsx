import { createLazyFileRoute } from "@tanstack/react-router";
import { ProjectsPage } from "../ProjectsPage";

export const Route = createLazyFileRoute("/Projetos")({
  component: ProjectsPage,
});
