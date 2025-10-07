import { useGetCurrentWeatherByCityQuery } from "../../services/weatherApi";
import { isWeatherInfo } from "../../utils/isWeatherInfo";
import { ErrorCard } from "./ErrorCard";
import { PresentationalInfoCard } from "./PresentationalInfoCard";

export const InfoCard = ({ cityName }: { cityName: string }) => {
  const { data, isLoading, error } = useGetCurrentWeatherByCityQuery(cityName);

  if (error || !isWeatherInfo(data)) {
    return <ErrorCard />;
  }
  if (isLoading) return <h3>Loading...</h3>;

  return <PresentationalInfoCard data={data} />;
};
