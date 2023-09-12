import { createSlice } from "@reduxjs/toolkit";
import { HexadecimalColor } from "../../hooks";

const createColors = () => {
  let colors = [];
  for (let i = 0; i <= 150; i++) {
    colors.push(HexadecimalColor());
  }
  return colors;
};

const initialState = {
  hexadecimalColors: createColors(),
};

const colorsSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    refresh: (state) => {
      state.hexadecimalColors = createColors();
    },
  },
});

interface stateType {
  colors: { hexadecimalColors: string[] };
}

export const getColors = (state: stateType) => state.colors.hexadecimalColors;
export const { refresh } = colorsSlice.actions;
export default colorsSlice.reducer;
