import { create } from 'zustand'
import { textOperations, type TextOperation } from '~/lib/text-operations'

interface TextState {
  text: string
  wordCount: number
  characterCount: number
  setText: (text: string) => void
  performOperation: (operation: TextOperation) => void
  getWordCount: () => number
  getCharacterCount: () => number
}

export const useTextStore = create<TextState>((set, get) => ({
  text: '',
  wordCount: 0,
  characterCount: 0,

  setText: (text: string) => {
    set({
      text,
      wordCount: text.split(/\s+/).filter(Boolean).length,
      characterCount: text.length,
    })
  },

  performOperation: (operation: TextOperation) => {
    const result = textOperations[operation](get().text)
    set({
      text: result,
      wordCount: result.split(/\s+/).filter(Boolean).length,
      characterCount: result.length,
    })
  },

  getWordCount: () => get().wordCount,
  getCharacterCount: () => get().characterCount,
}))