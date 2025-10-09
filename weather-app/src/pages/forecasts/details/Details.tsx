import { WeatherCard } from "@/components/cards/WeatherCard";
import { useDetails } from "./useDetails";
import { NotFound } from "@/pages/NotFound";

export const Details = () => {
  const { data, error, isLoading, cityName } = useDetails();

  if (isLoading) {
    return (
      <div className=" wrapper">
        <h1 className=" main-title">Loading detailed {cityName} forecast...</h1>
      </div>
    );
  }
  if (error || !data) {
    return <NotFound />;
  }

  const { current } = data;

  return (
    <div className=" wrapper items-center flex flex-col gap-12 ">
      <h1 className=" main-title">Detailed {cityName} forecast</h1>
      <section className=" w-1/2 bg-gray-800 dark:bg-white text-white text-2xl dark:text-black rounded-2xl p-8 justify-items-center gap-2 mb-48 grid grid-cols-2 grid-rows-7">
        <h2 className=" text-center text-4xl col-span-2  row-span-2">
          Current weather conditions
        </h2>
        <p>
          Temperature: {current.temp_c} <sup>°C</sup>
        </p>
        <p>
          Feels like {current.feelslike_c} <sup>°C</sup>
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
      <section className=" flex justify-around gap-20 flex-wrap pb-[40vh]  ">
        {data.forecast.forecastday.slice(1).map((day) => (
          <WeatherCard data={day} key={day.date} />
        ))}
      </section>
    </div>
  );
};
