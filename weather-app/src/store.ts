import { configureStore } from "@reduxjs/toolkit";
import { weatherApi } from "./services/weatherApi";
import searchReducer from "./pages/home/searchSlice";
import favoritesReducer from "./pages/favorites/favoritesSlice";

export const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
    search: searchReducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
