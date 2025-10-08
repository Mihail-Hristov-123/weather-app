import { useGetCurrentWeatherByCityQuery } from "@/services/weatherApi";

import { ErrorCard } from "./subcards/ErrorCard";
import { LoadingCard } from "./subcards/LoadingCard";
import { PresentationalInfoCard } from "./subcards/PresentationalInfoCard";

export const InfoCard = ({ cityName }: { cityName: string }) => {
  const { data, isLoading, error } = useGetCurrentWeatherByCityQuery(cityName);

  if (error) {
    return <ErrorCard />;
  }
  if (isLoading) return <LoadingCard />;

  return <PresentationalInfoCard data={data} />;
};
