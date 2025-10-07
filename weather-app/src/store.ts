import { configureStore } from "@reduxjs/toolkit";
import { weatherApi } from "./services/weatherApi";
import searchReducer from "./pages/home/searchSlice";
import favoritesReducer from "./pages/favorites/favoritesSlice";
import paginationReducer from "./pages/forecasts/paginationSlice";
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
