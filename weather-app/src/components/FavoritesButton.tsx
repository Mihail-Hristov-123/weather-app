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
      {isFavorite ? "Remove from favorites" : "Add to favorites"}
    </button>
  );
};
