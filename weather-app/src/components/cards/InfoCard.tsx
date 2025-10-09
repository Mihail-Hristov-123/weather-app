import { useGetCurrentWeatherByCityQuery } from "@/services/weatherApi";
import { PresentationalInfoCard } from "./subcards/PresentationalInfoCard";
import { FallbackCard } from "./FallbackCard";

export const InfoCard = ({ cityName }: { cityName: string }) => {
  const { data, isLoading, error } = useGetCurrentWeatherByCityQuery(cityName);

  if (error || isLoading) return <FallbackCard loading={isLoading} />;

  return <PresentationalInfoCard data={data!} />;
};
