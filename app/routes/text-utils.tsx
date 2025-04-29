import * as React from "react";
import { TextForm } from "~/components/text-utils/text-form";
import { useTextStore } from "~/store/text-store";

export function meta() {
  return [
    { title: "Text Utils - React App" },
    {
      name: "description",
      content: "A text utility application built with React",
    },
  ];
}

export default function TextUtils() {
  const { text, setText, performOperation, wordCount, characterCount } =
    useTextStore();

  return (
    <div className="container mx-auto py-8 flex flex-col items-center">
      <TextForm
        text={text}
        onTextChange={setText}
        onOperation={performOperation}
      />

      <div className="mt-8 space-y-4 w-full max-w-2xl">
        <div>
          <h2 className="text-lg font-semibold mb-2">Text Summary</h2>
          <p>
            {wordCount} words and {characterCount} characters
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Preview</h2>
          <p className="whitespace-pre-wrap">{text || "Nothing to preview"}</p>
        </div>
      </div>
    </div>
  );
}
