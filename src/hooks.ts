import {useDispatch, useSelector, TypedUseSelectorHook} from "react-redux";
import type {RootState, AppDispatch} from "./store";

// Все о событиях
export const useAppDispatch = () => useDispatch<AppDispatch>();
// Все об объектах
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;