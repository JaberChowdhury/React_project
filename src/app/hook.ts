import type { RootState, AppDispatch } from "./store";
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
