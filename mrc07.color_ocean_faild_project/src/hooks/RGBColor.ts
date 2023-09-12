import validator from "./Validator";

const RGBColor = () => {
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);

  const r = validator(red.toString());
  const g = validator(green.toString());
  const b = validator(blue.toString());

  return `rgb(${r},${g},${b})`;
};

export default RGBColor;
