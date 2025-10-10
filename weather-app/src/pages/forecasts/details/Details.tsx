import { WeatherCard } from "@/components/cards/WeatherCard";
import { useDetails } from "./useDetails";
import { NotFound } from "@/pages/NotFound";
import { LoadingDetails } from "@/components/LoadingDetails";
import { FavoritesButton } from "@/components/buttons/FavoritesButton";

export const Details = () => {
  const { data, error, isLoading, cityLocation, futureForecasts } =
    useDetails();

  if (isLoading) return <LoadingDetails location={cityLocation} />;
  if (error || !data || !futureForecasts) return <NotFound />;

  const { current, location } = data;

  const weatherDetails = [
    //is this OK?
    { label: "Temperature", value: `${current.temp_c} °C` },
    { label: "Feels like", value: `${current.feelslike_c} °C` },
    { label: "Humidity", value: `${current.humidity}%` },
    { label: "Condition", value: current.condition.text },
    { label: "Wind", value: `${current.wind_kph} km/h (${current.wind_dir})` },
    { label: "Pressure", value: `${current.pressure_mb} mb` },
    { label: "Precipitation", value: `${current.precip_mm} mm` },
    { label: "Cloud cover", value: `${current.cloud}%` },
    { label: "UV Index", value: current.uv },
    { label: "Visibility", value: `${current.vis_km} km` },
    { label: "Gusts", value: `${current.gust_kph} km/h` },
  ];

  return (
    <main className="wrapper flex flex-col items-center gap-18">
      <h1 className="main-title text-center">
        Detailed <span className="capitalize">{cityLocation}</span> forecast
      </h1>

      <article className="w-1/2 bg-gray-800 dark:bg-white text-white text-2xl dark:text-black rounded-2xl p-8 mb-12 grid grid-cols-2 grid-rows-7 gap-2 justify-items-center">
        <h2 className="text-4xl text-center col-span-2 row-span-2">
          Current weather conditions
        </h2>
        {weatherDetails.map(({ label, value }) => (
          <p key={label}>
            {label}: {value}
          </p>
        ))}
      </article>

      <FavoritesButton
        city={location.name}
        country={location.country}
        type="text"
      />

      <h2 className="text-4xl text-center py-12">
        Forecast for the next 5 days
      </h2>

      <section className="flex flex-wrap justify-around gap-20 pb-[30vh]">
        {futureForecasts.map((day) => (
          <WeatherCard key={day.date} data={day} />
        ))}
      </section>
    </main>
  );
};
