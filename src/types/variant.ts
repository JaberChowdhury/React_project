export interface ColorObject {
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

export interface HSLColor {
  hue: number;
  saturation: number;
  lightness: number;
}
