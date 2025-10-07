import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type SearchSliceType = {
  value: string;
  history: string[];
};

const initialState: SearchSliceType = {
  value: "",
  history: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    update: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    reset: (state) => {
      state.value = "";
    },
    addToHistory: (state, action: PayloadAction<string>) => {
      state.history.push(action.payload);
    },
  },
});

export const { update, reset, addToHistory } = searchSlice.actions;

export default searchSlice.reducer;
