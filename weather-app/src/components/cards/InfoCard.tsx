import { useAppDispatch, useAppSelector } from "../../typedHooks";
import { FavoritesButton } from "../FavoritesButton";
import { add, removeOne } from "../../pages/favorites/favoritesSlice";

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

export const InfoCard = ({ data }: { data: ForecastData }) => {
  const { location, current } = data;
  const favorites = useAppSelector((store) => store.favorites);
  const { name: cityName } = location;
  const isFavorite = favorites.includes(cityName);
  const dispatch = useAppDispatch();

  const updateFavoriteStatus = () =>
    dispatch(isFavorite ? removeOne(cityName) : add(cityName));

  return (
    <section className=" bg-gray-400 w-1/3 flex flex-col items-center ">
      <FavoritesButton
        updateStatus={updateFavoriteStatus}
        isFavorite={isFavorite}
      />
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
