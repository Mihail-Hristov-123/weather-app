import { useGetCurrentWeatherByCityQuery } from "../../services/weatherApi";

import { ErrorCard } from "./ErrorCard";
import { LoadingCard } from "./LoadingCard";
import { PresentationalInfoCard } from "./PresentationalInfoCard";

export const InfoCard = ({ cityName }: { cityName: string }) => {
  const { data, isLoading, error } = useGetCurrentWeatherByCityQuery(cityName);

  if (error) {
    return <ErrorCard />;
  }
  if (isLoading) return <LoadingCard />;

  return <PresentationalInfoCard data={data} />;
};
