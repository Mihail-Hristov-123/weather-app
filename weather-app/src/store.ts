import { configureStore } from "@reduxjs/toolkit";
import { weatherApi } from "./services/weatherApi";
import searchReducer from "./slices/searchSlice";
import favoritesReducer from "./slices/favoritesSlice";
import paginationReducer from "./slices/paginationSlice";
export const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
    search: searchReducer,
    favorites: favoritesReducer,
    pagination: paginationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
