import { createSlice } from "@reduxjs/toolkit";
import suraList from "@/assets/sura.json";
import type { InitialState } from "@/types/Suralist";

interface State {
  suraList: InitialState;
}

const initialState: InitialState = {
  surah: suraList,
};

const suraListSlice = createSlice({
  name: "surahList",
  initialState,
  reducers: {},
});

export default suraListSlice.reducer;
export const suraListSelector = (state: State) => state.suraList;
