import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { cities } from "../../utils/cities";

interface PaginationInfo {
  currentPage: number;
  itemsPerPage: number;
}

const initialState: PaginationInfo = {
  currentPage: 1,
  itemsPerPage: 10,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    incrementPage: (state) => {
      if (state.currentPage * state.itemsPerPage > cities.length) return;
      state.currentPage++;
    },
    decrementPage: (state) => {
      if (state.currentPage === 1) return;
      state.currentPage--;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
    },
  },
});

export default paginationSlice.reducer;
export const { incrementPage, decrementPage, setPage, setItemsPerPage } =
  paginationSlice.actions;
