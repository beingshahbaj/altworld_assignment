import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../Redux/Candidateslice";

export const store = configureStore({
  reducer: {
    data: dataSlice,
  },
});
