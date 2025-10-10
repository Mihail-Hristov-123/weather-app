import { InfoCard } from "@/components/cards/InfoCard";
import { useFavorites } from "./useFavorites";

export const Favorites = () => {
  const { favoriteLocations } = useFavorites();

  return (
    <div className=" wrapper ">
      <h1 className=" main-title">
        Monitor the weather in your favorite locations
      </h1>
      <section className=" flex flex-wrap gap-6 justify-around px-6 pb-12 ">
        {favoriteLocations.length ? (
          favoriteLocations.map((location) => (
            <InfoCard key={location} cityName={location} />
          ))
        ) : (
          <h2 className="text-4xl">You haven't pinned any locations yet.</h2>
        )}
      </section>
    </div>
  );
};
