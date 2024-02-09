import { configureStore } from "@reduxjs/toolkit";
import suraReducer from "@/features/suraList/suraListSlice";
import themeReducer from "@/features/theme/themeSlice";
import banglaReducer from "@/features/bangla/banglaSlice";

const store = configureStore({
  reducer: {
    suraList: suraReducer,
    theme: themeReducer,
    bangla: banglaReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
