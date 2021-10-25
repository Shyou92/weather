import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store/store"

export const useCustomDispatch = () => {
  return useDispatch<AppDispatch>();
};

export const useCustomSelector:TypedUseSelectorHook<RootState> = useSelector;