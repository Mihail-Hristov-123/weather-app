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
      const cityName = action.payload;
      if (!state.history.includes(cityName)) state.history.unshift(cityName);
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
