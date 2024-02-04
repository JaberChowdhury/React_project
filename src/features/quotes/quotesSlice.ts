import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Quotes } from "@/types/quotes";

interface InitialState {
  quotes: Quotes[];
  isLoading: boolean;
  error: boolean | string;
}

interface State {
  quotes: InitialState;
}

const initialState = {
  quotes: [],
  isLoading: false,
  error: false,
} as InitialState;

const API =
  "https://raw.githubusercontent.com/JaberChowdhury/Image-source/main/Quotes/source.json";
const fetchQuotes = createAsyncThunk("quotes/fetchQuotes", async () => {
  const response = await axios.get(API);
  return await response.data.source;
});

const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQuotes.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchQuotes.fulfilled, (state, action) => {
      state.isLoading = false;
      state.quotes = action.payload;
    });
    builder.addCase(fetchQuotes.rejected, (state, action) => {
      state.isLoading = false;
      state.quotes = [];
      state.error = JSON.stringify(action.payload);
    });
  },
});

export default quotesSlice.reducer;
export { fetchQuotes };
export const quotesSelcetor = (state: State) => state.quotes;