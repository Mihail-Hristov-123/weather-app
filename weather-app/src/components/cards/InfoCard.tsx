import { useGetCurrentWeatherByCityQuery } from "../../services/weatherApi";
import { ErrorCard } from "./ErrorCard";
import { PresentationalInfoCard } from "./PresentationalInfoCard";

export const InfoCard = ({ cityName }: { cityName: string }) => {
  const { data, isLoading, error } = useGetCurrentWeatherByCityQuery(cityName);

  if (error) return <ErrorCard />;
  if (isLoading) return <h3>Loading...</h3>;
  return <PresentationalInfoCard data={data} />;
};
