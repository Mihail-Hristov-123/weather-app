import { useGetCurrentWeatherQuery } from "../services/weatherApi";

export const Home = () => {
  const { data, error, isLoading } = useGetCurrentWeatherQuery("Sofia");

  return (
    <>
      <h1>Home page</h1>
    </>
  );
};
