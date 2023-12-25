import React from "react";

interface propsType {
  children: React.ReactNode;
}

const Article = ({ children }: propsType) => {
  return <article>{children}</article>;
};

export default Article;
