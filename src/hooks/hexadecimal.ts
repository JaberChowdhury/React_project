import { Colors } from "@/types/colors";

const hexadecimal = (limit: number = 100): Colors[] => {
  const hexadecimal_code = "0123456789abcdef".split("");

  const getBit = () => {
    let bit = "";
    for (let i = 1; i < 3; i++) {
      bit += hexadecimal_code[Math.floor(Math.random() * 16)];
    }
    return bit;
  };
  let colors = [];

  for (let i = 0; i < limit; i++) {
    const r = getBit().toUpperCase();
    const oposite_hexa_red = (255 - parseInt(r, 16))
      .toString(16)
      .toUpperCase()
      .padStart(2, "0");
    const g = getBit().toUpperCase();
    const oposite_hexa_green = (255 - parseInt(g, 16))
      .toString(16)
      .toUpperCase()
      .padStart(2, "0");
    const b = getBit().toUpperCase();
    const oposite_hexa_blue = (255 - parseInt(b, 16))
      .toString(16)
      .toUpperCase()
      .padStart(2, "0");
    colors.push({
      main: r + g + b,
      opposite: oposite_hexa_red + oposite_hexa_green + oposite_hexa_blue,
    });
  }

  return colors;
};

export default hexadecimal;
