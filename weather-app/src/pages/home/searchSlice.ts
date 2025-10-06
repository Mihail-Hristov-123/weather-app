import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type SearchSliceType = {
  value: string;
};

const initialState: SearchSliceType = {
  value: "",
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
  },
});

export const { update, reset } = searchSlice.actions;

export default searchSlice.reducer;
