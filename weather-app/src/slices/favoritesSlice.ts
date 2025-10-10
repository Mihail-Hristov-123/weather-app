import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: string[] = JSON.parse(
  localStorage.getItem("favorites") || "[]"
);

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<string>) => {
      if (!state.includes(action.payload)) state.push(action.payload);
    },
    removeOneFavorite: (state, action: PayloadAction<string>) => {
      return state.filter((location) => location !== action.payload);
    },
    removeAllFavorites: (state) => {
      state.length = 0;
    },
  },
});

export const { addFavorite, removeOneFavorite, removeAllFavorites } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
