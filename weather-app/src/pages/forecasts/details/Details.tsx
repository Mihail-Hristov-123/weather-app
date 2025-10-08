import { useParams } from "react-router";
import { useGetCurrentWeatherByCityQuery } from "../../../services/weatherApi";
import { ErrorCard } from "../../../components/cards/ErrorCard";

import { isWeatherInfo } from "../../../utils/isWeatherInfo";
import { FavoritesButton } from "../../../components/buttons/FavoritesButton";

export const Details = () => {
  const { id: cityName } = useParams();
  if (!cityName) {
    return;
  }

  const { data, isLoading, error } = useGetCurrentWeatherByCityQuery(cityName);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error || !isWeatherInfo(data)) {
    return <ErrorCard />;
  }

  const { current } = data;
  return (
    <div className="flex flex-col items-center p-4 wrapper dark:text-white ">
      <h1 className="main-title">
        Detailed <span className="capitalize">{cityName}</span> weather forecast
      </h1>

      <img
        src={current.condition.icon}
        alt={`${current.condition.text} icon`}
        className="w-16 h-16"
      />

      <p className="text-lg mt-2">{current.condition.text}</p>

      <div className="mt-4 text-center">
        <p>
          Temperature: {current.temp_c}°C / {current.temp_f}°F
        </p>
        <p>Feels like: {current.feelslike_c}°C</p>
        <p>Humidity: {current.humidity}%</p>
        <p>
          Wind: {current.wind_kph} kph ({current.wind_dir})
        </p>
        <p>UV Index: {current.uv}</p>
        <p>Visibility: {current.vis_km} km</p>
      </div>
      <FavoritesButton cityName={cityName} type="text" />
    </div>
  );
};
