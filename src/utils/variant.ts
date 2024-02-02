interface ColorObject {
  original: {
    hex: {
      string: string;
      r: string;
      g: string;
      b: string;
    };
    rgb: {
      r: number;
      g: number;
      b: number;
      string: string;
    };
    hsl: {
      hue: number;
      saturation: number;
      lightness: number;
      string: string;
    };
  };
  opposite: {
    hex: {
      string: string;
      r: string;
      g: string;
      b: string;
    };
    rgb: {
      r: number;
      g: number;
      b: number;
      string: string;
    };
    hsl: {
      hue: number;
      saturation: number;
      lightness: number;
      string: string;
    };
  };
}

interface HSLColor {
  hue: number;
  saturation: number;
  lightness: number;
}

const opositeColor = (hexadecimal: string): ColorObject | undefined => {
  const checkValidity = (): boolean => {
    const hexadecimal_code = "0123456789abcdef".split("");
    let result = true;
    for (let i = 0; i < hexadecimal.length; i++) {
      if (hexadecimal_code.indexOf(hexadecimal.charAt(i)) === -1) {
        result = false;
        break; // Break out of the loop as soon as an invalid character is found
      }
    }
    return result;
  };
  const isValid = checkValidity();
  if (hexadecimal && isValid && hexadecimal.length === 6) {
    const hexadecimal_colors = hexadecimal.match(/.{1,2}/g);
    const hexToHSL = (hex: string): HSLColor => {
      hex = hex.replace(/^#/, "");
      const bigint = parseInt(hex, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;

      const normalizedR = r / 255;
      const normalizedG = g / 255;
      const normalizedB = b / 255;

      const max = Math.max(normalizedR, normalizedG, normalizedB);
      const min = Math.min(normalizedR, normalizedG, normalizedB);
      const lightness = (max + min) / 2;

      let hue = 0;
      let saturation = 0;
      if (max === min) {
        hue = saturation = 0;
      } else {
        const delta = max - min;
        saturation =
          lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

        switch (max) {
          case normalizedR:
            hue =
              ((normalizedG - normalizedB) / delta +
                (normalizedG < normalizedB ? 6 : 0)) *
              60;
            break;
          case normalizedG:
            hue = ((normalizedB - normalizedR) / delta + 2) * 60;
            break;
          case normalizedB:
            hue = ((normalizedR - normalizedG) / delta + 4) * 60;
            break;
        }
      }

      hue = (hue + 360) % 360;

      return {
        hue: Math.round(hue),
        saturation: Math.round(saturation * 100),
        lightness: lightness,
      };
    };
    if (hexadecimal_colors) {
      const getHexadecimal = () => {
        const oposite_hexa_red = (255 - parseInt(hexadecimal_colors[0], 16))
          .toString(16)
          .toUpperCase();
        const oposite_hexa_green = (255 - parseInt(hexadecimal_colors[1], 16))
          .toString(16)
          .toUpperCase();
        const oposite_hexa_blue = (255 - parseInt(hexadecimal_colors[2], 16))
          .toString(16)
          .toUpperCase();
        return {
          r: hexadecimal_colors[0],
          g: hexadecimal_colors[1],
          b: hexadecimal_colors[2],
          or: oposite_hexa_red,
          og: oposite_hexa_green,
          ob: oposite_hexa_blue,
        };
      };
      const getRgb = () => {
        const r = parseInt(hexadecimal_colors[0], 16);
        const g = parseInt(hexadecimal_colors[1], 16);
        const b = parseInt(hexadecimal_colors[2], 16);
        const or = 255 - Number(r);
        const og = 255 - Number(g);
        const ob = 255 - Number(b);
        return { r, g, b, or, og, ob };
      };
      const getHsl = () => {
        const hsl = hexToHSL(`#${hexadecimal}`);
        // get opposite hexadecimal code
        const c = getHexadecimal();
        const ohsl = hexToHSL(`#${c.or}${c.og}${c.ob}`);
        return {
          main: {
            string: `hsl(${hsl.hue},${hsl.saturation},${hsl.lightness})`,
            hue: hsl.hue,
            saturation: hsl.saturation,
            lightness: hsl.lightness,
          },
          opposite: {
            string: `hsl(${ohsl.hue},${ohsl.saturation},${ohsl.lightness})`,
            hue: ohsl.hue,
            saturation: ohsl.saturation,
            lightness: ohsl.lightness,
          },
        };
      };
      const rgb = getRgb();
      const hsl = getHsl();
      const hex = getHexadecimal();

      return {
        original: {
          hex: {
            r: hex.r,
            g: hex.g,
            b: hex.b,
            string: `#${hex.r}${hex.g}${hex.b}`,
          },
          rgb: {
            r: rgb.r,
            g: rgb.g,
            b: rgb.b,
            string: `rgb(${rgb.r},${rgb.g},${rgb.b})`,
          },
          hsl: {
            hue: hsl.main.hue,
            saturation: hsl.main.saturation,
            lightness: hsl.main.lightness,
            string: hsl.main.string,
          },
        },
        opposite: {
          hex: {
            r: hex.or,
            g: hex.og,
            b: hex.ob,
            string: `#${hex.or}${hex.og}${hex.ob}`,
          },
          rgb: {
            r: rgb.or,
            g: rgb.og,
            b: rgb.ob,
            string: `rgb(${rgb.or},${rgb.og},${rgb.ob})`,
          },
          hsl: {
            hue: hsl.opposite.hue,
            saturation: hsl.opposite.saturation,
            lightness: hsl.opposite.lightness,
            string: hsl.opposite.string,
          },
        },
      };
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
};

const getHexadecimal = () => {
  const hexadecimal_code = "0123456789abcdef".split("");
  let code = "";
  for(let i=0; i<6; i++){
    code += hexadecimal_code[Math.floor(Math.random()*16)]
  }
  return code;
}
console.log(JSON.parse(JSON.stringify(opositeColor(getHexadecimal()), null, 4)));
