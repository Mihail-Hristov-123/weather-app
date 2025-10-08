import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: string[] = JSON.parse(
  localStorage.getItem("favorites") || "[]"
);

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      if (!state.includes(action.payload)) state.push(action.payload);
    },
    removeOne: (state, action: PayloadAction<string>) => {
      return state.filter((location) => location !== action.payload);
    },
    removeAll: (state) => {
      state.length = 0;
    },
  },
});

export const { add, removeOne, removeAll } = favoritesSlice.actions;

export default favoritesSlice.reducer;
