import { createContext } from "react";
import { Content } from "./types/Content";
import { Metadata } from "./types/Metadata";

export const MetadataContext = createContext<Metadata[]>([]);
export const ContentContext = createContext<Content>({});
