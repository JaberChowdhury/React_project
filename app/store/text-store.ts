import { create } from 'zustand'
import { textOperations, type TextOperation } from '~/lib/text-operations'

interface TextState {
  text: string
  previousText: string
  wordCount: number
  characterCount: number
  setText: (text: string) => void
  performOperation: (operation: TextOperation) => void
  getWordCount: () => number
  getCharacterCount: () => number
  getDiff: () => Array<{ text: string; changed: boolean }>
}

export const useTextStore = create<TextState>((set, get) => ({
  text: '',
  previousText: '',
  wordCount: 0,
  characterCount: 0,

  setText: (text: string) => {
    set((state) => ({
      previousText: state.text,
      text,
      wordCount: text.split(/\s+/).filter(Boolean).length,
      characterCount: text.length,
    }))
  },

  performOperation: (operation: TextOperation) => {
    const currentText = get().text
    const result = textOperations[operation](currentText)
    set({
      previousText: currentText,
      text: result,
      wordCount: result.split(/\s+/).filter(Boolean).length,
      characterCount: result.length,
    })
  },

  getWordCount: () => get().wordCount,
  getCharacterCount: () => get().characterCount,

  getDiff: () => {
    const { text, previousText } = get()
    if (!previousText) return [{ text, changed: false }]

    // Split text into characters for comparison
    const currentChars = [...text]
    const previousChars = [...previousText]
    
    const diff: Array<{ text: string; changed: boolean }> = []
    let currentSegment = { text: '', changed: false }

    currentChars.forEach((char, i) => {
      const isChanged = char !== previousChars[i]
      
      if (currentSegment.changed === isChanged) {
        currentSegment.text += char
      } else {
        diff.push(currentSegment)
        currentSegment = { text: char, changed: isChanged }
      }
    })
    
    diff.push(currentSegment)
    return diff.filter(segment => segment.text)
  },
}))