import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/typedHooks";
import { add, removeAll, removeOne } from "./favoritesSlice";

export const useFavorites = () => {
  const favoriteLocations = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();
  const addFavorite = (cityName: string) => dispatch(add(cityName));

  const removeOneFavorite = (cityName: string) => dispatch(removeOne(cityName));
  const removeAllFavorites = () => dispatch(removeAll());

  const updateFavoriteStatus = (cityName: string) => {
    const isFavorite = checkIsFavorite(cityName);
    dispatch(isFavorite ? removeOne(cityName) : add(cityName));
  };

  const checkIsFavorite = (cityName: string) => {
    return favoriteLocations.includes(cityName);
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteLocations));
  }, [favoriteLocations]);

  return {
    favoriteLocations,
    addFavorite,
    removeAllFavorites,
    removeOneFavorite,
    updateFavoriteStatus,
    checkIsFavorite,
  };
};
