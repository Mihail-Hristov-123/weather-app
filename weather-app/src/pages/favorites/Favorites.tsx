import { InfoCard } from "../../components/cards/InfoCard";
import { useFavorites } from "./useFavorites";

export const Favorites = () => {
  const { favoriteLocations } = useFavorites();

  return (
    <div>
      <h1>Pinned locations</h1>
      <section className=" flex flex-wrap justify-around">
        {favoriteLocations.length ? (
          favoriteLocations.map((location) => <InfoCard cityName={location} />)
        ) : (
          <h3>You haven't pinned any locations yet.</h3>
        )}
      </section>
    </div>
  );
};
