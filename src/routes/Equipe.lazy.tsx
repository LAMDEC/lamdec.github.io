import { createLazyFileRoute } from "@tanstack/react-router";
import { Members } from "../Members";

export const Route = createLazyFileRoute("/Equipe")({
  component: Members,
});
