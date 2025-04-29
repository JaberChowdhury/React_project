export const textOperations = {
  uppercase: (text: string): string => text.toUpperCase(),
  lowercase: (text: string): string => text.toLowerCase(),
  capitalize: (text: string): string => {
    return text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  },
  clear: (): string => "",
};

export type TextOperation = keyof typeof textOperations;
