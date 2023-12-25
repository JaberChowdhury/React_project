import React from "react";

interface divType {
  className?: string;
  children: React.ReactNode;
  style?: object;
}

export default function Home({ className, children, style }: divType) {
  return (
    <div style={style} className={className}>
      {children || "react div component"}
    </div>
  );
}
