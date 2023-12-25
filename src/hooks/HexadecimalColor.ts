const HexadecimalColor = () => {
  const hexadecimalCode = [..."0123456789abcdef"];
  let limit = 6;
  let HexadecimalColorCode = "#";
  while (limit--) {
    const randomNumber = Math.floor(Math.random() * hexadecimalCode.length);
    HexadecimalColorCode += hexadecimalCode[randomNumber];
  }
  return HexadecimalColorCode;
};

export default HexadecimalColor;
