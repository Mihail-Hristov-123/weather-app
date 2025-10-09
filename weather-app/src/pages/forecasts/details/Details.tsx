import { useDetails } from "./useDetails";

export const Details = () => {
  const { data, error, isLoading, cityName } = useDetails();
  console.log(data);
  if (!data) {
    return;
  }
  const { current } = data;

  return (
    <div className=" wrapper">
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
        <h2 className=" dark:text-white text-center text-4xl">
          Forecast for the next 5 days
        </h2>
      </section>
    </div>
  );
};
