import savedSVG from "@/assets/save.svg";
import unsavedSVG from "@/assets/unsave.svg";
import { useFavoriteLocation } from "@/hooks/useFavoriteLocation";

interface FavoritesButtonProps {
  city: string;
  country: string;
  type?: "icon" | "text";
}

export const FavoritesButton = ({
  city,
  country,
  type = "icon",
}: FavoritesButtonProps) => {
  const { isFavorite, handleSave } = useFavoriteLocation(city, country);

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
      onClick={handleSave}
      className={`cursor-pointer ${
        type === "text" && "px-4 py-2 border rounded dark:bg-white text-black"
      }`}
    >
      {type === "icon" ? icon : text}
    </button>
  );
};
