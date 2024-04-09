import { createContext } from "react";
import { Metadata } from "./types/Metadata";
import { Posts } from "./types/Posts";

export const MetadataContext = createContext<Metadata[]>([]);
export const PostsContext = createContext<Posts>({});
