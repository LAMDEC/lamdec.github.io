import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/posts/$postId")({
  component: Post,
});

export function Post() {
  const { postId } = Route.useParams();
  return "post " + postId;
}
