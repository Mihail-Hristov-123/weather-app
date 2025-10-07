import { useAppDispatch, useAppSelector } from "../../typedHooks";
import { add, removeAll, removeOne } from "./favoritesSlice";

export const useFavorites = () => {
  const favoriteLocations = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();
  const addFavorite = (cityName: string) => dispatch(add(cityName));
  const removeOneFavorite = (cityName: string) => dispatch(removeOne(cityName));
  const removeAllFavorites = () => dispatch(removeAll());

  return {
    favoriteLocations,
    addFavorite,
    removeAllFavorites,
    removeOneFavorite,
  };
};
