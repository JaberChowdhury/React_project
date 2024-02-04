import { createSlice } from "@reduxjs/toolkit";
import hexadecimal from "@/hooks/hexadecimal";
import { Colors } from "@/types/colors";

interface InitialState {
  colors: Colors[];
  isLoading: boolean;
}
interface State {
  colors: InitialState;
}

const initialState: InitialState = {
  colors: hexadecimal(200),
  isLoading: false,
};

const colorsSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {
    update: (state) => {
      state.isLoading = true;
      state.colors = hexadecimal(300);
      state.isLoading = false;
    },
  },
});

export default colorsSlice.reducer;
export const colorsSelector = (state: State) => state.colors;
