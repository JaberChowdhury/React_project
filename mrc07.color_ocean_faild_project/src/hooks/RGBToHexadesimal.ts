const getRGBNumbers = (rgb: string) => {
  const available = [..."0123456789,."];
  const filtered = rgb.split("").filter((d) => {
    return available.includes(d);
  });
  const rgbNumbers = filtered.join("").split(",");
  return rgbNumbers;
};

const convertRGB = (rgb: string) => {
  const rgbNumbers = getRGBNumbers(rgb);
  if (rgbNumbers.length === 4 || rgbNumbers.length === 3) {
    const r = parseFloat(rgbNumbers[0]).toString(16);
    const g = parseFloat(rgbNumbers[1]).toString(16);
    const b = parseFloat(rgbNumbers[2]).toString(16);
    return `#${r}${g}${b}`;
  } else {
    return new Error("please type a valid rgb code");
  }
};

const RGBToHexadesimal = (rgbcolorcode: string) => {
  const isRGB = rgbcolorcode.slice(0, 3) === "rgb";
  const isRGBA = rgbcolorcode.slice(0, 4) === "rgba";
  if (isRGBA) {
    return convertRGB(rgbcolorcode);
  } else if (isRGB) {
    return convertRGB(rgbcolorcode);
  } else {
    return new Error("please enter a valid rgb or rgba colorcode");
  }
};

export default RGBToHexadesimal;
