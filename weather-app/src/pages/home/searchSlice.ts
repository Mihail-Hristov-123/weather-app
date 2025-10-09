import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type SearchSliceType = {
  value: string;
  suggestions: AutocompleteSuggestion[];
  history: string[];
};

const initialState: SearchSliceType = {
  value: "",
  suggestions: [],
  history: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addToHistory: (state, action: PayloadAction<string>) => {
      if (!state.history.includes(action.payload))
        state.history.push(action.payload);
    },
    update: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    reset: (state) => {
      state.value = "";
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

export const { update, reset, setAutocompleteSuggestions, addToHistory } =
  searchSlice.actions;

export default searchSlice.reducer;
