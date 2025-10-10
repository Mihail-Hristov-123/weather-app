import { formulateLocationString } from "@/utils/formulateLocationString";
import { useFavorites } from "./useFavorites";

export const useFavoriteLocation = (city: string, country: string) => {
  const { checkIsFavorite, updateFavoriteStatus } = useFavorites();
  const locationString = formulateLocationString(city, country);
  const isFavorite = checkIsFavorite(locationString);
  const handleSave = () => updateFavoriteStatus(locationString);

  return { isFavorite, handleSave };
};
