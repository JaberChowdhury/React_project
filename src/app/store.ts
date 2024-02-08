import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/features/counter/counterSlice";
import colorsReducer from "@/features/colors/colorsSlice";
import quotesReducer from "@/features/quotes/quotesSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    colors: colorsReducer,
    quotes: quotesReducer,
  },
});

// mui theme
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
