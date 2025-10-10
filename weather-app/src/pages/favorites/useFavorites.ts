import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/typedHooks";
import { addFavorite, removeOneFavorite } from "./favoritesSlice";

export const useFavorites = () => {
  const favoriteLocations = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();

  const updateFavoriteStatus = (cityName: string) => {
    const isFavorite = checkIsFavorite(cityName);
    dispatch(isFavorite ? removeOneFavorite(cityName) : addFavorite(cityName));
  };

  const checkIsFavorite = (cityName: string) => {
    return favoriteLocations.includes(cityName);
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteLocations));
  }, [favoriteLocations]);

  return { favoriteLocations, updateFavoriteStatus, checkIsFavorite };
};
