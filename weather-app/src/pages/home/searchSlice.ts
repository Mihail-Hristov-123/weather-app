import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type SearchSliceType = {
  searchValue: string;
  suggestions: AutocompleteSuggestion[];
  history: string[];
};

const initialState: SearchSliceType = {
  searchValue: "",
  suggestions: [],
  history: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addToHistory: (state, action: PayloadAction<string>) => {
      if (!state.history.includes(action.payload))
        state.history.unshift(action.payload);
      if (state.history.length > 10) state.history.pop();
    },
    updateSearch: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    resetSearch: (state) => {
      state.searchValue = "";
      state.suggestions.length = 0;
    },
    setAutocompleteSuggestions: (
      state,
      action: PayloadAction<AutocompleteSuggestion[]>
    ) => {
      state.suggestions = action.payload;
    },
  },
});

export const {
  updateSearch,
  resetSearch,
  setAutocompleteSuggestions,
  addToHistory,
} = searchSlice.actions;

export default searchSlice.reducer;
