import { createLazyFileRoute } from "@tanstack/react-router";
import { ContatoPage } from "../Contato";

export const Route = createLazyFileRoute("/Contato")({
  component: ContatoPage,
});
