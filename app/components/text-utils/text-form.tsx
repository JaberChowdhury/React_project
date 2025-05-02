import React, { lazy, Suspense } from "react";
import { FaFont, FaHistory, FaTrash, FaWordpress } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { Link, useNavigate } from "react-router"; // Add this import
import { type TextOperation, textOperations } from "~/lib/text-operations";
import { useTextStore } from "~/store/text-store";
import useTextAnalyzer from "~/store/useTextAnalyzer";
const Button = lazy(() =>
  import("~/components/ui/button").then((m) => ({ default: m.Button }))
);
const Card = lazy(() =>
  import("~/components/ui/card").then((m) => ({ default: m.Card }))
);
const CardContent = lazy(() =>
  import("~/components/ui/card").then((m) => ({ default: m.CardContent }))
);
const CardTitle = lazy(() =>
  import("~/components/ui/card").then((m) => ({ default: m.CardTitle }))
);
const Textarea = lazy(() =>
  import("~/components/ui/textarea").then((m) => ({ default: m.Textarea }))
);
const Tabs = lazy(() => import("../Tabs"));

interface TextFormProps {
  text: string;
  onTextChange: (text: string) => void;
  onOperation: (operation: TextOperation) => void;
}

export function TextForm({ text, onTextChange, onOperation }: TextFormProps) {
  const { wordCount, history, characterCount, setText, deleteHistory } =
    useTextStore();
  const navigate = useNavigate(); // Add this line

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Card className="w-full max-w-2xl px-5">
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
        <Textarea
          placeholder="Enter your text here..."
          value={text}
          onChange={(e) => onTextChange(e.target.value)}
          className="max-h-[200px] min-h-[200px]"
        />
        <Tabs
          TabsData={[
            {
              key: "Textactions",
              item: (
                <div className="w-full grid grid-cols-3 gap-3">
                  {Object.keys(textOperations)
                    .sort()
                    .map((operation) => (
                      <Suspense
                        fallback={<span>Loading...</span>}
                        key={operation}
                      >
                        <Button
                          onClick={() =>
                            onOperation(operation as TextOperation)
                          }
                        >
                          {operation}
                        </Button>
                      </Suspense>
                    ))}
                </div>
              ),
              default: true,
            },
            {
              key: "History",
              item: (
                <div className="space-y-3">
                  {history.length === 0 ? (
                    <div className="flex flex-col items-center justify-center p-8 text-center border-2 border-dashed rounded-lg bg-muted/5">
                      <FaHistory className="w-12 h-12 text-muted-foreground/50" />
                      <h3 className="mt-4 text-sm font-medium text-muted-foreground">
                        No history yet.
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground/70">
                        Start typing or paste some text above and click any
                        action to see the history
                      </p>
                    </div>
                  ) : (
                    [...history.slice().reverse()].map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between border rounded p-2 bg-gray-50 relative my-7"
                      >
                        <div className="flex items-center space-x-3">
                          <div>
                            <div className="font-semibold">{item.action}</div>
                            <div className="text-xs text-gray-500">
                              {item.time}
                            </div>
                            <div className="text-sm text-gray-700 truncate max-w-xs">
                              {item.text}
                            </div>
                          </div>
                        </div>
                        <div className="w-full flex justify-end items-center py-7 absolute top-7 z-40 text-2xl">
                          <Suspense fallback={<span>...</span>}>
                            <Button
                              onClick={() => {
                                // Set the text in the analyzer store and navigate
                                useTextAnalyzer.getState().setText(item.text);
                                navigate("/textanalyzer");
                              }}
                              variant="ghost"
                              title="Analysis"
                            >
                              <GrNotes className="text-yellow-600 mx-2" />
                            </Button>
                          </Suspense>
                          <Suspense fallback={<span>Loading...</span>}>
                            <Button
                              onClick={() => setText(item.text)}
                              variant="ghost"
                              title="History"
                            >
                              <FaHistory className="text-blue-500" />
                            </Button>
                          </Suspense>
                          <Suspense fallback={<span>...</span>}>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => deleteHistory(item.id)}
                              title="Delete"
                            >
                              <FaTrash className="text-red-500" />
                            </Button>
                          </Suspense>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              ),
            },
          ]}
        />
      </Card>
    </Suspense>
  );
}
