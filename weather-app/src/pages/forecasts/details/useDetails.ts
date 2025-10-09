import { useParams } from "react-router";
import { useGetForecastByCityQuery } from "@/services/weatherApi";

export const useDetails = () => {
  const { id: cityName } = useParams();

  const { data, error, isLoading } = useGetForecastByCityQuery(cityName!);

  return { data, error, isLoading, cityName };
};
