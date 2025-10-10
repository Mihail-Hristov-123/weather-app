import savedSVG from "@/assets/save.svg";
import unsavedSVG from "@/assets/unsave.svg";
import { useFavorites } from "@/pages/favorites/useFavorites";

interface FavoritesButtonProps {
  cityName: string;
  type?: "icon" | "text";
}

export const FavoritesButton = ({
  cityName,
  type = "icon",
}: FavoritesButtonProps) => {
  const { checkIsFavorite, updateFavoriteStatus } = useFavorites();

  const isFavorite = checkIsFavorite(cityName);
  const handleClick = () => updateFavoriteStatus(cityName);

  const text = isFavorite ? "Remove from favorites" : "Add to favorites";

  const icon = (
    <img
      className="w-10"
      src={isFavorite ? unsavedSVG : savedSVG}
      alt="floppy disc icon"
      title={isFavorite ? "Unsave" : "Save"}
    />
  );

  return (
    <button
      onClick={handleClick}
      className={`cursor-pointer ${
        type === "text" && "px-4 py-2 border rounded dark:bg-white text-black"
      }`}
    >
      {type === "icon" ? icon : text}
    </button>
  );
};
