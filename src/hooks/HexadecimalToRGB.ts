import validator from "./Validator";

const h2d = (hexacode: string) => {
  const hexadecimal = [..."0123456789abcdef"];
  const decimal = [..."0123456789", "10", "11", "12", "13", "14", "15"];

  let finalDecimal = "";
  for (let i = 0; i < decimal.length; i++) {
    if (hexacode === hexadecimal[i]) {
      finalDecimal = decimal[i];
    }
  }

  return finalDecimal;
};

const convertRGB = (code: string) => {
  const hexadecimalCode = code.slice(1);
  const red = hexadecimalCode.slice(0, 2).split("");
  const green = hexadecimalCode.slice(2, 4).split("");
  const blue = hexadecimalCode.slice(4).split("");

  const red_decimal =
    parseFloat(h2d(red[0])) * 16 ** 1 + parseFloat(h2d(red[1])) * 16 ** 0;
  const green_decimal =
    parseFloat(h2d(green[0])) * 16 ** 1 + parseFloat(h2d(green[1])) * 16 ** 0;
  const blue_decimal =
    parseFloat(h2d(blue[0])) * 16 ** 1 + parseFloat(h2d(blue[1])) * 16 ** 0;

  const r = validator(red_decimal.toString());
  const g = validator(green_decimal.toString());
  const b = validator(blue_decimal.toString());

  return `rgb(${r},${g},${b})`;
};

const HexadecimalToRGB = (hexadecimalCode: string) => {
  const isValid =
    hexadecimalCode.slice(0, 1) === "#" && hexadecimalCode.length === 7;
  if (isValid) {
    return convertRGB(hexadecimalCode);
  } else {
    return new Error("HexadecimalColorCode must be total of 7 digit");
  }
};

export default HexadecimalToRGB;
