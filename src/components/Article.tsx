import React from "react";
import { cn } from "@/lib/utils";

interface propsType {
  children: React.ReactNode;
}

const Article = ({ children }: propsType) => {
  return <article>{children}</article>;
};

export default Article;
