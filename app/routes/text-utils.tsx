import { EmptyPreview } from "~/components/text-utils/empty-preview";
import { HighlightedText } from "~/components/text-utils/highlighted-text";
import { TextForm } from "~/components/text-utils/text-form";
import { cn } from "~/lib/utils";
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
  const { text, setText, performOperation, getDiff } = useTextStore();
  const textSegments = getDiff();

  return (
    <div className=" mx-auto py-8 flex flex-col items-center">
      <TextForm
        text={text}
        onTextChange={setText}
        onOperation={performOperation}
      />

      <div
        className={cn(
          "mt-8 space-y-4 w-full max-w-2xl ",
          text && "max-h-[300px] overflow-y-scroll"
        )}
      >
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
