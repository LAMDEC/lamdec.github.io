import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/Equipe")({
  component: Equipe,
});

function Equipe() {
  return <>matheus rafael leon heudson ralph paulo gabriel</>;
}
