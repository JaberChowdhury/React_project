import { create } from "zustand";

type State = {
  text: string;
  setText: (data: string) => void;
  letterCount: number;
  wordCount: number;
  lineCount: number;
  paragraphCount: number;
  specialCharCount: number;
  sentenceCount: number;
  updateCounts: () => void;
};

const useStore = create<State>((set) => ({
  text: "",

  setText: (data: string) => set(() => ({ text: data })),

  letterCount: 0,
  wordCount: 0,
  lineCount: 0,
  paragraphCount: 0,
  specialCharCount: 0,
  sentenceCount: 0,

  updateCounts: () =>
    set((state) => {
      const text = state.text;

      const letterCount = (text.match(/[a-zA-Z]/g) || []).length;
      const wordCount = (text.match(/\b\w+\b/g) || []).length;
      const lineCount = text.split(/\r\n|\r|\n/).length;
      const paragraphCount = text.split(/\n\s*\n/).filter(Boolean).length;
      const specialCharCount = (text.match(/[^a-zA-Z0-9\s]/g) || []).length;
      const sentenceCount = (text.match(/[^.!?]+[.!?]/g) || []).length;

      return {
        letterCount,
        wordCount,
        lineCount,
        paragraphCount,
        specialCharCount,
        sentenceCount,
      };
    }),
}));

export default useStore;
