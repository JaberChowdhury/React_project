import { create } from "zustand";

export type USETEXTANALYZER = {
  text: string;
  setText: (text: string) => void;
  resetText: () => void;
  getCharacterFrequenciesArray: () => { item: string; count: number }[];
};

const useTextAnalyzer = create<USETEXTANALYZER>((set, get) => ({
  text: "ha jlhdsiu sdfkljlfkds weijh",
  resetText: () => set((state) => ({ text: "" })),
  setText: (text: string) => {
    set((state) => ({
      previousText: state.text,
      text,
      wordCount: text.split(/\s+/).filter(Boolean).length,
      characterCount: text.length,
    }));
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

export default useTextAnalyzer;
