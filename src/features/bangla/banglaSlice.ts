import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type {InitialState} from "@/types/bangla";


interface State {
  bangla: InitialState;
}

export const fetchData = createAsyncThunk("bangla/fetchData", async () => {
  const res = await axios.get(
    "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan.json",
  );
  const data = await res.data.quran;
  return data;
});

const initialState: InitialState = {
  bangla: [],
  isLoading: false,
  error: null,
};

const banglaSlice = createSlice({
  name: "bangla",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.bangla = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoading = false;
      state.bangla = [];
      state.error = JSON.stringify(action.payload);
    });
  },
});

export default banglaSlice.reducer;
export const banglaSelector = (state: State) => state.bangla;
