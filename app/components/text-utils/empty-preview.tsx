import * as React from "react";
import { FileTextIcon } from "lucide-react";
import { cn } from "~/lib/utils";

interface EmptyPreviewProps {
  className?: string;
}

export function EmptyPreview({ className }: EmptyPreviewProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center p-8 text-center border-2 border-dashed rounded-lg bg-muted/5",
        className
      )}
    >
      <FileTextIcon className="w-12 h-12 text-muted-foreground/50" />
      <h3 className="mt-4 text-sm font-medium text-muted-foreground">
        No text to preview
      </h3>
      <p className="mt-1 text-sm text-muted-foreground/70">
        Start typing or paste some text above to see the preview
      </p>
    </div>
  );
}
