import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    incrementCounter: (state) => {
      state.count = state.count + 1;
    },
    decrementCounter: (state) => {
      state.count = state.count - 1;
    },
    resetCounter: (state) => {
      state.count = 0;
    },
    incrementCounterByAmount: (state, action) => {
      state.count = state.count + action.payload;
    },
  },
});

export const {
  incrementCounter,
  decrementCounter,
  resetCounter,
  incrementCounterByAmount,
} = counterSlice.actions;

export default counterSlice.reducer;
