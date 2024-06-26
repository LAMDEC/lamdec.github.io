import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { Header } from "../Header";

export const Route = createRootRoute({
  component: () => <Header />,
});
