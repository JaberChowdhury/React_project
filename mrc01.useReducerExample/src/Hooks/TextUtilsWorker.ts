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
  makeArray = () => {
    return JSON.stringify(this.#value.split(""));
  };
  onlyNumbers = () => {
    const num = [..."0123456789"];
    const splited = this.#value.split("");
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
    const splited = this.#value.split("");
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
    const splited = this.#value.split("");
    return JSON.stringify(splited.reverse());
  };
  makeDouble = () => {
    return this.#value.repeat(2);
  };
  reverseString = () => {
    const reverseSplited = this.#value.split("").reverse();
    return reverseSplited.join("");
  };
  uniqueString = () => {
    const splited = this.#value.split("");
    const unique = [...new Set(splited)];
    return unique.join("");
  };
}

export default TextUtilsWorker;
