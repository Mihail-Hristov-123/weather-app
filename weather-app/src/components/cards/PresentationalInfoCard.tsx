import { FavoritesButton } from "../buttons/FavoritesButton";
import { useFavorites } from "../../pages/favorites/useFavorites";
import { InfoButton } from "../buttons/InfoButton";

interface ForecastData {
  location: {
    country: string;
    name: string;
    region: string;
  };
  current: {
    condition: {
      icon: string;
      text: string;
    };
    feelslike_c: number;
    temp_c: number;
  };
}

export const PresentationalInfoCard = ({ data }: { data: ForecastData }) => {
  const { updateFavoriteStatus, checkIsFavorite } = useFavorites();
  const { location, current } = data;
  const { name: cityName } = location;
  const isFavorite = checkIsFavorite(cityName);

  return (
    <section className=" bg-gray-400 w-1/3 flex flex-col items-center ">
      <FavoritesButton
        updateStatus={() => updateFavoriteStatus(cityName)}
        isFavorite={isFavorite}
      />
      <InfoButton cityName={cityName} />
      <h3>
        {cityName}, {location.region}, {location.country}
      </h3>
      <img src={current.condition.icon} alt={current.condition.text + "icon"} />
      <p className=" flex flex-col items-center">
        <span>Current temperature: {current.temp_c} °C</span>
        <span>Feels like: {current.feelslike_c} °C</span>
      </p>
      <p>{current.condition.text}</p>
    </section>
  );
};
