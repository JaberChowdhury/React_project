import validator from "./Validator";

const getNumbers = (rgb: string) => {
  const available = [..."0123456789,."];
  const filtered = rgb.split("").filter((d: string) => {
    return available.includes(d);
  });
  const rgbNumbers = filtered.join("").split(",");
  return rgbNumbers;
};

const convertRGB = (rgb: string) => {
  const rgbNumbers = getNumbers(rgb);
  if (rgbNumbers.length === 3) {
    const red = 255 - Number(rgbNumbers[0]);
    const green = 255 - Number(rgbNumbers[1]);
    const blue = 255 - Number(rgbNumbers[2]);
    const r = validator(red.toString());
    const g = validator(green.toString());
    const b = validator(blue.toString());
    return `rgb(${r},${g},${b})`;
  } else {
    return new Error("please enter a valid rgb colorcode");
  }
};

const convertRGBA = (rgba: string) => {
  const rgbNumbers = getNumbers(rgba);
  if (rgbNumbers.length === 4) {
    const red = 255 - Number(rgbNumbers[0]);
    const green = 255 - Number(rgbNumbers[1]);
    const blue = 255 - Number(rgbNumbers[2]);
    const alpha = rgbNumbers[3];
    const r = validator(red.toString());
    const g = validator(green.toString());
    const b = validator(blue.toString());
    return `rgba(${r},${g},${b},${alpha})`;
  } else {
    return new Error("please enter a valid rgba colorcode");
  }
};

const OpositeRGBColor = (rgbcolorcode: string) => {
  const isRGB = rgbcolorcode.slice(0, 3) === "rgb";
  const isRGBA = rgbcolorcode.slice(0, 4) === "rgba";
  if (isRGBA) {
    return convertRGBA(rgbcolorcode);
  } else if (isRGB) {
    return convertRGB(rgbcolorcode);
  } else {
    return new Error("please enter a valid rgba or rgb colorcode");
  }
};

export default OpositeRGBColor;
