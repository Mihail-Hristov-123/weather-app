import { useGetCurrentWeatherByCityQuery } from "@/services/weatherApi";
import { PresentationalInfoCard } from "./subcards/PresentationalInfoCard";
import { FallbackCard } from "./FallbackCard";

export const InfoCard = ({ location }: { location: string }) => {
  const { data, isLoading, error } = useGetCurrentWeatherByCityQuery(location);

  if (error || isLoading || !data) return <FallbackCard loading={isLoading} />;

  return <PresentationalInfoCard data={data} />;
};
