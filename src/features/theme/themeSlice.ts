import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  theme: "dark" | "light";
}

interface State {
  theme: InitialState;
}

const initialState: InitialState = {
  theme: "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {},
});

export default themeSlice.reducer;
export const themeSelector = (state: State) => state.theme;
