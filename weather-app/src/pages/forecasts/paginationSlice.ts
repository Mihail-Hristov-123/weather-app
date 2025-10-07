import { createSlice } from "@reduxjs/toolkit";

import { CITIES_COUNT, ITEMS_PER_PAGE } from "../../global.settings";

interface PaginationInfo {
  currentPage: number;
}

const initialState: PaginationInfo = {
  currentPage: 1,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    incrementPage: (state) => {
      if (state.currentPage * ITEMS_PER_PAGE > CITIES_COUNT) return;
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
