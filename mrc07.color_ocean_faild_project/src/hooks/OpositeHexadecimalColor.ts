const OpositeHexadecimalColor = (hexadecimalColorCode: string) => {
  if (hexadecimalColorCode.length === 7) {
    const hexadecimalCode = [..."0123456789abcdef"];
    const splitedColorCode = hexadecimalColorCode.slice(1).split("");
    let OpositeHexadecimalColorCode = "#";
    for (let i = 0; i < splitedColorCode.length; i++) {
      const index = hexadecimalCode.indexOf(splitedColorCode[i]);
      const opositeCode = hexadecimalCode.reverse()[index];
      OpositeHexadecimalColorCode += opositeCode;
    }
    return OpositeHexadecimalColorCode;
  } else {
    return "hexadecimalColorCode must be valid 7 digit";
  }
};

export default OpositeHexadecimalColor;
