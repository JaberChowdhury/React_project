import { create } from "zustand";
import { textOperations, type TextOperation } from "~/lib/text-operations";

type history_type = {
  text: string;
  action: TextOperation;
  id: string;
  time: string;
};
interface TextState {
  text: string;
  previousText: string;
  wordCount: number;
  characterCount: number;
  history: history_type[];
  addHistory: (data: history_type) => void;
  deleteHistory: (id: string) => void;
  setText: (text: string) => void;
  performOperation: (operation: TextOperation) => void;
  getWordCount: () => number;
  getCharacterCount: () => number;
  getDiff: () => Array<{ text: string; changed: boolean }>;
  getCharacterFrequenciesArray: () => Array<{ item: string; count: number }>;
}

export const useTextStore = create<TextState>((set, get) => ({
  text: "Every great achievement begins with the decision to try.",
  previousText: "",
  wordCount: 0,
  characterCount: 0,
  history: [],

  deleteHistory: (id) =>
    set((state) => ({
      history: state.history.filter((item) => item.id !== id),
    })),
  addHistory: (data) => {
    set((state) => ({
      history: [...state.history, data],
    }));
  },
  setText: (text: string) => {
    set((state) => ({
      previousText: state.text,
      text,
      wordCount: text.split(/\s+/).filter(Boolean).length,
      characterCount: text.length,
    }));
  },

  performOperation: (operation: TextOperation) => {
    const currentText = get().text;
    const result = textOperations[operation](currentText);
    set((state) => {
      state.addHistory({
        id: crypto.randomUUID(),
        text: state.text,
        action: operation,
        time: new Date().toLocaleTimeString(),
      });
      return {
        previousText: currentText,
        text: result,
        wordCount: result.split(/\s+/).filter(Boolean).length,
        characterCount: result.length,
      };
    });
  },

  getWordCount: () => get().wordCount,
  getCharacterCount: () => get().characterCount,

  getDiff: () => {
    const { text, previousText } = get();
    if (!previousText) return [{ text, changed: false }];

    // Split text into characters for comparison
    const currentChars = [...text];
    const previousChars = [...previousText];

    const diff: Array<{ text: string; changed: boolean }> = [];
    let currentSegment = { text: "", changed: false };

    currentChars.forEach((char, i) => {
      const isChanged = char !== previousChars[i];

      if (currentSegment.changed === isChanged) {
        currentSegment.text += char;
      } else {
        diff.push(currentSegment);
        currentSegment = { text: char, changed: isChanged };
      }
    });

    diff.push(currentSegment);
    return diff.filter((segment) => segment.text);
  },

  getCharacterFrequenciesArray: () => {
    const { text } = get();
    const freqMap: Record<string, number> = {};
    for (const char of text) {
      freqMap[char] = (freqMap[char] || 0) + 1;
    }
    return Object.entries(freqMap).map(([item, count]) => ({ item, count }));
  },
}));
