import { createSlice } from "@reduxjs/toolkit";
import type { InitialState } from "@/types/theme";

interface State {
  theme: InitialState;
}

const initialState: InitialState = {
  dark: true,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state) => {
      state.dark = !state.dark;
    },
  },
});

export default themeSlice.reducer;
export const themeSelector = (state: State) => state.theme;
export const { setTheme } = themeSlice.actions;
