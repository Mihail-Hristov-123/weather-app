import { WeatherCard } from "../../../components/cards/WeatherCard";
import { useDetails } from "./useDetails";

export const Details = () => {
  const { data, error, isLoading, cityName } = useDetails();
  console.log(data);
  if (!data) {
    return;
  }
  const { current } = data;

  return (
    <div className=" wrapper flex flex-col gap-12 py-10">
      <section>
        <h1 className=" main-title">Detailed {cityName} forecast</h1>
        <h2 className=" text-center text-4xl">Current weather conditions</h2>
        <p>
          Temperature: {current.temp_c} <sup>°C</sup>
        </p>
        <p>
          Feels like: {current.feelslike_c} <sup>°C</sup>
        </p>
        <p>Humidity: {current.humidity}%</p>
        <p>Condition: {current.condition.text}</p>
        <p>
          Wind: {current.wind_kph} km/h ({current.wind_dir})
        </p>
        <p>Pressure: {current.pressure_mb} mb</p>
        <p>Precipitation: {current.precip_mm} mm</p>
        <p>Cloud cover: {current.cloud}%</p>
        <p>UV Index: {current.uv}</p>
        <p>Visibility: {current.vis_km} km</p>
        <p>Gusts: {current.gust_kph} km/h</p>
      </section>
      <h2 className=" dark:text-white text-center text-4xl">
        Forecast for the next 5 days
      </h2>
      <section className=" flex justify-around gap-16 flex-wrap px-20">
        {data.forecast.forecastday.slice(1).map((day) => (
          <WeatherCard data={day} key={day.date} />
        ))}
      </section>
    </div>
  );
};
