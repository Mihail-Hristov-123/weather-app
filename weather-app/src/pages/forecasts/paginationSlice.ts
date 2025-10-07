import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { cities } from "../../utils/popularLocations";

interface PaginationInfo {
  currentPage: number;
}

const initialState: PaginationInfo = {
  currentPage: 1,
};

export const ITEMS_PER_PAGE = 20;
export const CITIES_COUNT = cities.length;

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    incrementPage: (state) => {
      if ((state.currentPage + 1) * ITEMS_PER_PAGE > CITIES_COUNT) return;
      state.currentPage++;
    },
    decrementPage: (state) => {
      if (state.currentPage === 1) return;
      state.currentPage--;
    },
  },
});

export default paginationSlice.reducer;
export const { incrementPage, decrementPage } = paginationSlice.actions;
