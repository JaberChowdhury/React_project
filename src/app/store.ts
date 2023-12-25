import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "../features/colors/colorsSlice";

const store = configureStore({
  reducer: {
    colors: colorReducer,
  },
});

export default store;
