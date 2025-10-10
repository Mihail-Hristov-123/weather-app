import { Routes } from "@/routes";
import { formulateLocationString } from "@/utils/formulateLocationString";
import { useNavigate } from "react-router";

export const useNavigationToDetails = (city: string, country: string) => {
  const navigate = useNavigate();
  const encodedLocation = encodeURIComponent(
    formulateLocationString(city, country)
  );

  const navigateToDetails = () =>
    navigate(`${Routes.FORECASTS}/${encodedLocation}`);

  return { navigateToDetails };
};
