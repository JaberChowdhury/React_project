class TextUtilsWorker {
  #value;
  constructor(value: string) {
    this.#value = value;
  }
  removeSpace = () => {
    const split = this.#value.split("");
    const nogap = split?.filter((d: string) => {
      return d !== " ";
    });
    return nogap.join("");
  };
  splitToArray = () => {
    return this.#value.split("");
  };
  makeArray = () => {
    return JSON.stringify(this.splitToArray());
  };
  onlyNumbers = () => {
    const num = [..."0123456789"];
    const splited = this.splitToArray();
    let output = "";
    for (let i = 0; i < splited.length; i++) {
      for (let n = 0; n < num.length; n++) {
        if (splited[i] === num[n]) {
          output += splited[i];
        }
      }
    }
    return output;
  };
  onlyString = () => {
    const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
    const splited = this.splitToArray();
    let output = "";
    for (let i = 0; i < splited.length; i++) {
      for (let n = 0; n < alphabet.length; n++) {
        if (splited[i].toLowerCase() === alphabet[n].toLowerCase()) {
          output += splited[i];
        }
      }
    }
    return output;
  };
  uppercase = () => {
    return this.#value.toUpperCase();
  };
  lowercase = () => {
    return this.#value.toLowerCase();
  };
  randomWord = () => {
    const words = [
      "mashroom",
      "olives",
      "gerlic",
      "graps",
      "carrot",
      "berry",
      "banana",
      "pineapple",
      "chili",
      "watermelon",
    ];
    return words[Math.floor(Math.random() * words.length)];
  };
  reverseArray = () => {
    const splited = this.splitToArray();
    return JSON.stringify(splited.reverse());
  };
  makeDouble = () => {
    return this.#value.repeat(2);
  };
  reverseString = () => {
    const reverseSplited = this.splitToArray().reverse();
    return reverseSplited.join("");
  };
  uniqueString = () => {
    const splited = this.splitToArray();
    const unique = [...new Set(splited)];
    return unique.join("");
  };
  countCharacters = () => {
    const countChars: { [char: string]: number } = {};
    const splited = this.splitToArray();
    splited.forEach((char) => {
      countChars[char] = (countChars[char] || 0) + 1;
    });
    let final: { char: string; value: number }[] = [];
    for (let x in countChars) {
      final.push({
        char: x,
        value: countChars[x],
      });
    }
    return final.sort((a, b) => {
      return b.value - a.value;
    });
  };
}

export default TextUtilsWorker;
