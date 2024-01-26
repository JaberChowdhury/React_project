import React from "react";
import { cn } from "@/lib/utils";

interface propsType {
  children: React.ReactNode;
  className?: string;
}

const Article = ({ children, className }: propsType) => {
  return (
    <article
      className={cn(
        "p-2 text-slate-200 first-letter:font-bold first-letter:text-4xl first-letter:mx-1",
        className,
      )}
    >
      {children}
    </article>
  );
};

export default Article;
