import * as React from "react";
import { cn } from "~/lib/utils";

interface HighlightedTextProps {
  segments: Array<{ text: string; changed: boolean }>;
  className?: string;
}

export function HighlightedText({ segments, className }: HighlightedTextProps) {
  return (
    <div className={cn("whitespace-pre-wrap", className)}>
      {segments.map((segment, index) => (
        <span
          key={index}
          className={cn(
            "transition-colors duration-500",
            segment.changed &&
              "bg-red-200 border border-red-400 rounded px-[2px] animate-bounce dark:bg-yellow-800"
          )}
        >
          {segment.text}
        </span>
      ))}
    </div>
  );
}
