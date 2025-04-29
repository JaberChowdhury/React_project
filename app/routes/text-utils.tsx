import * as React from "react";
import { TextForm } from "~/components/text-utils/text-form";
import { HighlightedText } from "~/components/text-utils/highlighted-text";
import { EmptyPreview } from "~/components/text-utils/empty-preview";
import { useTextStore } from "~/store/text-store";
import { FaWordpress, FaFont } from "react-icons/fa"; // Import icons

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
  const {
    text,
    setText,
    performOperation,
    wordCount,
    characterCount,
    getDiff,
  } = useTextStore();
  const textSegments = getDiff();

  return (
    <div className="container mx-auto py-8 flex flex-col items-center">
      {/* <div className="flex space-x-4 mb-4">
        <div className="flex items-center">
          <FaWordpress className="mr-1" />
          <span>{wordCount}</span>
        </div>
        <div className="flex items-center">
          <FaFont className="mr-1" />
          <span>{characterCount}</span>
        </div>
      </div> */}

      <TextForm
        text={text}
        onTextChange={setText}
        onOperation={performOperation}
      />

      <div className="mt-8 space-y-4 w-full max-w-2xl">
        <div>
          <h2 className="text-lg font-semibold mb-2">Preview</h2>
          {text ? (
            <HighlightedText segments={textSegments} />
          ) : (
            <EmptyPreview />
          )}
        </div>
      </div>
    </div>
  );
}
