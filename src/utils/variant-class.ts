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

class ColorConverter {
  private hexadecimal: string;

  constructor(hexadecimal: string) {
    this.hexadecimal = hexadecimal;
  }

  private hexToHSL(hex: string): HSLColor {
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
          hue = ((normalizedG - normalizedB) / delta + (normalizedG < normalizedB ? 6 : 0)) * 60;
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
  }

  private getHexadecimal(): any {
    const oposite_hexa_red = (255 - parseInt(this.hexadecimal.substr(0, 2), 16)).toString(16).toUpperCase();
    const oposite_hexa_green = (255 - parseInt(this.hexadecimal.substr(2, 2), 16)).toString(16).toUpperCase();
    const oposite_hexa_blue = (255 - parseInt(this.hexadecimal.substr(4, 2), 16)).toString(16).toUpperCase();

    return {
      r: this.hexadecimal.substr(0, 2),
      g: this.hexadecimal.substr(2, 2),
      b: this.hexadecimal.substr(4, 2),
      or: oposite_hexa_red,
      og: oposite_hexa_green,
      ob: oposite_hexa_blue,
    };
  }

  private getRgb(): any {
    const r = parseInt(this.hexadecimal.substr(0, 2), 16);
    const g = parseInt(this.hexadecimal.substr(2, 2), 16);
    const b = parseInt(this.hexadecimal.substr(4, 2), 16);

    const or = 255 - r;
    const og = 255 - g;
    const ob = 255 - b;

    return { r, g, b, or, og, ob };
  }

  private getHsl(): any {
    const hsl = this.hexToHSL(`#${this.hexadecimal}`);
    const c = this.getHexadecimal();
    const ohsl = this.hexToHSL(`#${c.or}${c.og}${c.ob}`);

    return {
      main: {
        string : `hsl(${hsl.hue},${hsl.saturation},${hsl.lightness})`,
        hue : hsl.hue,
        saturation : hsl.saturation,
        lightness : hsl.lightness,
      },
      opposite: {
        string: `hsl(${ohsl.hue},${ohsl.saturation},${ohsl.lightness})`,
        hue : ohsl.hue,
        saturation : ohsl.saturation,
        lightness : ohsl.lightness,
      }
    };
  }

  public opositeColor(): ColorObject | undefined {
    if (this.hexadecimal && this.hexadecimal.length === 6) {
      const hexadecimal_colors = this.hexadecimal.match(/.{1,2}/g);

      if (hexadecimal_colors) {
        const rgb = this.getRgb();
        const hsl = this.getHsl();
        const hex = this.getHexadecimal();

        return {
          original: {
            hex: {
              string: `#${hex.r}${hex.g}${hex.b}`,
              r: hex.r,
              g: hex.g,
              b: hex.b,
            },
            rgb: {
              string: `rgb(${rgb.r},${rgb.g},${rgb.b})`,
              r: rgb.r,
              g: rgb.g,
              b: rgb.b,
            },
            hsl: {
              string: hsl.main.string,
              hue: hsl.main.hue,
              saturation: hsl.main.saturation,
              lightness: hsl.main.lightness,
            },
          },
          opposite: {
            hex: {
              string: `#${hex.or}${hex.og}${hex.ob}`,
              r: hex.or,
              g: hex.og,
              b: hex.ob,
            },
            rgb: {
              string: `rgb(${rgb.or},${rgb.og},${rgb.ob})`,
              r: rgb.or,
              g: rgb.og,
              b: rgb.ob,
            },
            hsl: {
              string: hsl.opposite.string,
              hue: hsl.opposite.hue,
              saturation: hsl.opposite.saturation,
              lightness: hsl.opposite.lightness,
            }
          },
        };
      } else {
        return undefined;
      }
    } else {
      return undefined;
    }
  }
}

// Example usage
const colorConverter = new ColorConverter("000000");
console.log(JSON.parse(JSON.stringify(colorConverter.opositeColor(), null, 2)));

const colorConverter2 = new ColorConverter("ffffff");
console.log(JSON.parse(JSON.stringify(colorConverter2.opositeColor(), null, 2)));

const colorConverter3 = new ColorConverter("111111");
console.log(JSON.parse(JSON.stringify(colorConverter3.opositeColor(), null, 2)));
