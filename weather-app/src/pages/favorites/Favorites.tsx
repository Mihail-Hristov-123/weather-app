import { useFavorites } from "./useFavorites";

export const Favorites = () => {
  const { favoriteLocations } = useFavorites();

  return (
    <div>
      <h1>Pinned locations</h1>
      {favoriteLocations.length ? (
        favoriteLocations.join(", ")
      ) : (
        <h3>You haven't pinned any locations yet</h3>
      )}
    </div>
  );
};
