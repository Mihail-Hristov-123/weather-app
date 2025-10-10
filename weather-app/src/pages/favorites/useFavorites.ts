import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/typedHooks";
import { addFavorite, removeOneFavorite } from "./favoritesSlice";

export const useFavorites = () => {
  const favoriteLocations = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();

  const updateFavoriteStatus = (location: string) => {
    const isFavorite = checkIsFavorite(location);
    dispatch(isFavorite ? removeOneFavorite(location) : addFavorite(location));
  };

  const checkIsFavorite = (location: string) => {
    return favoriteLocations.includes(location);
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteLocations));
  }, [favoriteLocations]);

  return { favoriteLocations, updateFavoriteStatus, checkIsFavorite };
};
