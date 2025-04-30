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
  reverse: (text: string): string => text.split("").reverse().join(""),
  removeSpaces: (text: string): string => text.replace(/\s/g, ""),
  // countWords: (text: string): string =>
  //   text.split(/\s+/).filter(Boolean).length.toString(),
  // countCharacters: (text: string): string => text.length.toString(),
  removeSpecialCharacters: (text: string): string =>
    text.replace(/[^a-zA-Z0-9\s]/g, ""),
  truncate: (text: string, length: number = 20): string =>
    text.length > length ? text.substring(0, length) + "..." : text,
  // isPalindrome: (text: string): string => {
  //   const cleanText = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  //   const reversedText = cleanText.split("").reverse().join("");
  //   return cleanText === reversedText ? "true" : "false";
  // },
  removeDuplicateWords: (text: string): string => {
    const words = text.split(/\s+/);
    const uniqueWords = [...new Set(words)];
    return uniqueWords.join(" ");
  },
  // generateRandomText: (length: number = 10): string => {
  //   const characters =
  //     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  //   let result = "";
  //   for (let i = 0; i < length; i++) {
  //     result += characters.charAt(
  //       Math.floor(Math.random() * characters.length)
  //     );
  //   }
  //   return result;
  // },
  // ----------------------------------------------------------------------
  // replaceWord: (text: string, oldWord: string, newWord: string): string =>
  //   text.replace(new RegExp(oldWord, "g"), newWord),
  removeExtraSpaces: (text: string): string => text.replace(/\s+/g, " ").trim(),
  addLineNumbers: (text: string): string => {
    const lines = text.split("\n");
    const numberedLines = lines.map((line, index) => `${index + 1}. ${line}`);
    return numberedLines.join("\n");
  },
  convertToSlug: (text: string): string => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  },
  initials: (text: string): string => {
    return text
      .split(" ")
      .map((word) => word[0])
      .join("");
  },
  wordWrap: (text: string, maxLength: number = 50): string => {
    const words = text.split(" ");
    let line = "";
    let result = "";

    for (const word of words) {
      if ((line + word).length > maxLength) {
        result += line.trim() + "\n";
        line = "";
      }
      line += word + " ";
    }

    result += line.trim();
    return result;
  },
  rot13: (text: string): string => {
    return text.replace(/[a-zA-Z]/g, (char) => {
      const base = char >= "a" ? "a".charCodeAt(0) : "A".charCodeAt(0);
      const offset = char.charCodeAt(0) - base;
      const newOffset = (offset + 13) % 26;
      return String.fromCharCode(base + newOffset);
    });
  },
  shuffleCharacters: (text: string): string => {
    const array = text.split("");
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join("");
  },
  isValidEmail: (text: string): string => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(text) ? "true" : "false";
  },
  // censorWords: (
  //   text: string,
  //   censoredWords: string[] = ["bad", "ugly"]
  // ): string => {
  //   const regex = new RegExp(censoredWords.join("|"), "gi");
  //   return text.replace(regex, "****");
  // },
  // removeEmojis: (text: string): string => {
  //   const emojiRegex =
  //     /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F900}-\u{1F9FF}\u{1F1E6}-\u{1F1FF}]/gu;
  //   return text.replace(emojiRegex, "");
  // },
  // generateLoremIpsum: (wordCount: number = 50): string => {
  //   const loremIpsum =
  //     "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum";
  //   const words = loremIpsum.split(" ");
  //   let result = "";
  //   for (let i = 0; i < wordCount; i++) {
  //     result += words[i % words.length] + " ";
  //   }
  //   return result.trim();
  // },
  reverseWords: (text: string): string => {
    return text
      .split(" ")
      .map((word) => word.split("").reverse().join(""))
      .join(" ");
  },
  removeHtmlTags: (text: string): string => {
    return text.replace(/<[^>]*>/g, "");
  },
  base64Encode: (text: string): string => {
    return btoa(text);
  },
  base64Decode: (text: string): string => {
    return atob(text);
  },
  countSentences: (text: string): string => {
    return text
      .split(/[.?!]+/)
      .filter(Boolean)
      .length.toString();
  },
  isUrl: (text: string): string => {
    try {
      new URL(text);
      return "true";
    } catch (_) {
      return "false";
    }
  },
  extractEmails: (text: string): string => {
    const emailRegex = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}/g;
    return text.match(emailRegex)?.join(", ") || "";
  },
  removeAccents: (text: string): string => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  },
  getCharacterFrequencies: (text: string): string => {
    const frequencies: { [key: string]: number } = {};
    text.split("").forEach((char) => {
      frequencies[char] = (frequencies[char] || 0) + 1;
    });
    return JSON.stringify(frequencies);
  },
};

export type TextOperation = keyof typeof textOperations;
