import * as React from "react";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { type TextOperation } from "~/lib/text-operations";
import { FaWordpress, FaFont } from "react-icons/fa";
import { useTextStore } from "~/store/text-store";

interface TextFormProps {
  text: string;
  onTextChange: (text: string) => void;
  onOperation: (operation: TextOperation) => void;
}

export function TextForm({ text, onTextChange, onOperation }: TextFormProps) {
  const { wordCount, characterCount } = useTextStore();
  return (
    <Card className="w-full max-w-2xl">
      <CardContent className=" w-full flex justify-between items-center">
        <CardTitle>Text Utils</CardTitle>
        <div className="flex space-x-4 mb-4">
          <div className="flex items-center">
            <FaWordpress className="mr-1" />
            <span>{wordCount}</span>
          </div>
          <div className="flex items-center">
            <FaFont className="mr-1" />
            <span>{characterCount}</span>
          </div>
        </div>
      </CardContent>
      <CardContent className="space-y-4">
        <Textarea
          placeholder="Enter your text here..."
          value={text}
          onChange={(e) => onTextChange(e.target.value)}
          className="min-h-[200px]"
        />
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => onOperation("uppercase")}>
            Convert to Uppercase
          </Button>
          <Button onClick={() => onOperation("lowercase")}>
            Convert to Lowercase
          </Button>
          <Button onClick={() => onOperation("capitalize")}>
            Capitalize Words
          </Button>
          <Button onClick={() => onOperation("clear")}>Clear Text</Button>
        </div>
      </CardContent>
    </Card>
  );
}
