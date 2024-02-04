import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    updateCounter: (state, action) => {
      state.count = action.payload.count;
    },
  },
});

export default counterSlice.reducer;
export const { updateCounter } = counterSlice.actions;
