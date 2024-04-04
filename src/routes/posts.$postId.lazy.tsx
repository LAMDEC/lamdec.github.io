import { createLazyFileRoute } from "@tanstack/react-router";
import { Post } from "../Post.tsx";

export const Route = createLazyFileRoute("/posts/$postId")({
  component: Post,
});
