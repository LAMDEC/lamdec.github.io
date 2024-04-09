import { Metadata } from "./Metadata";

interface Post {
  metadata: Metadata;
  content: string;
}
export type Posts = Record<string, Post>;
