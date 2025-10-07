import savedSVG from "../../assets/save.svg";
import unsavedSVG from "../../assets/unsave.svg";
import { useFavorites } from "../../pages/favorites/useFavorites";

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
  return (
    <button onClick={handleClick} className=" cursor-pointer">
      {type === "icon" ? (
        <img
          className=" w-10 cursor-pointer"
          src={isFavorite ? unsavedSVG : savedSVG}
          alt={"floppy disc icon"}
          title={isFavorite ? "unsave" : "save"}
        />
      ) : isFavorite ? (
        "Remove from favorites"
      ) : (
        "Add to favorites"
      )}
    </button>
  );
};
