import React from "react";
import { cn } from "@/lib/utils";

interface propsType {
  children: React.ReactNode;
  className?: string;
}

const Article = ({ children, className }: propsType) => {
  return (
    <article className={cn("p-2 text-squise", className)}>{children}</article>
  );
};

export default Article;
