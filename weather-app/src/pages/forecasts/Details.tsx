import { useParams } from "react-router";
import { useGetCurrentWeatherByCityQuery } from "../../services/weatherApi";
import { ErrorCard } from "../../components/cards/ErrorCard";
import { useDetails } from "./useDetails";
import { isWeatherInfo } from "../../utils/isWeatherInfo";

export const Details = () => {
  const { id: cityName } = useParams();
  if (!cityName) {
    return;
  }
  const { transformNameToUppercase } = useDetails();
  const { data, isLoading, error } = useGetCurrentWeatherByCityQuery(cityName);

  const transformedName = transformNameToUppercase(cityName);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error || !isWeatherInfo(data)) {
    return <ErrorCard />;
  }

  return (
    <div className=" flex flex-col items-center">
      <h1>Detailed {transformedName} weather forecast</h1>
    </div>
  );
};
