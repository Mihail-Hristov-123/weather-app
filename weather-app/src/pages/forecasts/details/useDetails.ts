import { useParams } from "react-router";
import { useGetForecastByCityQuery } from "@/services/weatherApi";

export const useDetails = () => {
  const { id: cityName } = useParams();

  if (!cityName) {
    // Remove ! to check out the Error Boundary component
    throw new Error("The useDetails hook relies on the URI params");
  }

  const { data, error, isLoading } = useGetForecastByCityQuery(cityName);
  const futureForecasts = data?.forecast.forecastday.slice(1);

  return { data, futureForecasts, error, isLoading, cityName };
};
