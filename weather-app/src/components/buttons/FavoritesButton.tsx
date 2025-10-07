import saveSVG from "../../assets/save.svg";
import unsaveSVG from "../../assets/unsave.svg";

interface FavoritesButtonProps {
  isFavorite: boolean;
  updateStatus: () => void;
}

export const FavoritesButton = ({
  isFavorite,
  updateStatus,
}: FavoritesButtonProps) => {
  return (
    <button onClick={updateStatus}>
      <img
        className=" w-10 cursor-pointer"
        src={isFavorite ? unsaveSVG : saveSVG}
        alt={"floppy disc icon"}
        title={isFavorite ? "unsave" : "save"}
      />
    </button>
  );
};
