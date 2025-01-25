import { create } from "zustand";

// type generator_type = {
//   password_length: number;
//   isNumber: boolean;
//   isEmoji: boolean;
//   isLowerCase: boolean;
//   isUpperCase: boolean;
//   isSpecialCharacter: boolean;
//   emojis: string[];
//   uppercase: string[];
//   lowercase: string[];
//   specialChar: string[];
// };

interface stateTytpe {
  password: string;
  password_length: number;
  numbers: string[];
  emojis: string[];
  uppercase: string[];
  lowercase: string[];
  specialChar: string[];
  isNumber: boolean;
  isEmoji: boolean;
  isUpperCase: boolean;
  isLowerCase: boolean;
  isSpecialCharacter: boolean;
  setPassword: (data: string) => void;
  updatePasswordLength: (value: number) => void;
  increasePasswordLength: () => void;
  decreasePasswordLength: () => void;
  toggleNumber: () => void;
  toggleEmoji: () => void;
  toggleUpperCase: () => void;
  toggleLowerCase: () => void;
  toggleSpecialCharac: () => void;
  clearPassword: () => void;
}

const useStore = create<stateTytpe>((set) => ({
  password: "",
  password_length: 4,
  numbers: "0123456789".split(""),
  emojis: [],
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
  lowercase: "abcdefghijklmnopqrstuvwxyz".split(""),
  specialChar: "`~!@#$%^&*()_+{}[]-=:;'|/.,".split(""),
  isNumber: false,
  isEmoji: false,
  isUpperCase: false,
  isLowerCase: false,
  setPassword: (data) => set((state) => ({ ...state, password: data })),
  updatePasswordLength: (value) =>
    set((state) => ({ ...state, password_length: value })),
  toggleEmoji: () => set((state) => ({ ...state, isEmoji: !state.isEmoji })),
  increasePasswordLength: () =>
    set((state) => ({
      ...state,
      password_length:
        state.password_length < 200 ? state.password_length + 1 : 200,
      // state.password_length + 1,
    })),
  decreasePasswordLength: () =>
    set((state) => ({
      ...state,
      password_length:
        state.password_length > 4 ? state.password_length - 1 : 4,
      // state.password_length - 1,
    })),
  isSpecialCharacter: false,
  toggleNumber: () => set((state) => ({ ...state, isNumber: !state.isNumber })),
  toggleLowerCase: () =>
    set((state) => ({ ...state, isLowerCase: !state.isLowerCase })),
  toggleUpperCase: () =>
    set((state) => ({ ...state, isUpperCase: !state.isUpperCase })),
  toggleSpecialCharac: () =>
    set((state) => ({
      ...state,
      isSpecialCharacter: !state.isSpecialCharacter,
    })),
  clearPassword: () => set((state) => ({ ...state, password: "" })),
}));
export default useStore;
